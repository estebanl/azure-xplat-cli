/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var loadBalancers = network.category('lb')
    .description($('Commands to manage load balancers'));
  var inboundNatPools = loadBalancers.category('inbound-nat-pool')
    .description($('Commands to manage inbound nat pools'));

  var defaultProtocol = 'TCP';
  var defaultFrontendPortRangeStart = '1';
  var defaultFrontendPortRangeEnd = '65534';
  var defaultBackendPort = '80';

  inboundNatPools.command('create [resource-group] [lb-name] [name]')
    .description($('Create an inbound nat pool'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat pool'))
    .option('-i, --frontend-ip-name [frontend-ip-name]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-id'))
    .option('-d, --frontend-ip-id [frontend-ip-id]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-name'))
    .option('-p, --protocol [protocol]', $('the transport protocol for the' +
      '\n     endpoint. Possible values are \'Udp\' or \'Tcp\' or \'All.\''))
    .option('-f, --frontend-port-range-start [frontend-port-range-start]', $('the first port number in the range of' +
      '\n     external ports that will be used to provide Inbound Nat to NICs associated with' +
      '\n     a load balancer. Acceptable values range between 1 and 65534'))
    .option('-e, --frontend-port-range-end [frontend-port-range-end]', $('the last port number in the range of' +
      '\n     external ports that will be used to provide Inbound Nat to NICs associated with' +
      '\n     a load balancer. Acceptable values range between 1 and 65535'))
    .option('-b, --backend-port [backend-port]', $('the port used for internal connections' +
      '\n     on the endpoint. Acceptable values are between 1 and 65535'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var inboundNatPool = utils.findFirstCaseIgnore(parentItem.inboundNatPools, { name: name });
      if (inboundNatPool) {
        throw new Error(util.format($('inbound nat pool with name "%s" already exists in load balancer "%s"'), name, lbName));
      }

      var parameters = {};

      if(!parameters.frontendIPConfiguration) {
        parameters.frontendIPConfiguration = {};
      }
      if(options.frontendIpId) {
        if(options.frontendIpName) {
          cli.output.warn($('--frontend-ip-name parameter will be ignored because --frontend-ip-id and --frontend-ip-name are mutually exclusive'));
        }
        parameters.frontendIPConfiguration.id = options.frontendIpId;
      } else if(options.frontendIpName) {
        var referredFrontendIPConfiguration = utils.findFirstCaseIgnore(loadBalancer.frontendIPConfigurations, { name: options.frontendIpName });
        if(!referredFrontendIPConfiguration) {
          throw new Error(util.format($('No frontend ip configuration with name "%s" found'), options.frontendIpName));
        }
        var idContainerFrontendIPConfiguration = referredFrontendIPConfiguration;
        parameters.frontendIPConfiguration.id = idContainerFrontendIPConfiguration.id;
      } else if(useDefaults) {
        if(loadBalancer.frontendIPConfigurations.length !== 0) {
          parameters.frontendIPConfiguration.id = loadBalancer.frontendIPConfigurations[0].id;
        } else {
          throw new Error(util.format($('Resource has no frontend ip configuration defined')));
        }
      }

      if(options.protocol) {
        parameters.protocol = validation.isIn(options.protocol, ['Udp', 'Tcp', 'All'], '--protocol');
      } else if(useDefaults) {
        parameters.protocol = defaultProtocol;
      }

      if(options.frontendPortRangeStart) {
        parameters.frontendPortRangeStart = parseInt(options.frontendPortRangeStart, 10);
      } else if(useDefaults) {
        parameters.frontendPortRangeStart = parseInt(defaultFrontendPortRangeStart, 10);
      }

      if(options.frontendPortRangeEnd) {
        parameters.frontendPortRangeEnd = parseInt(options.frontendPortRangeEnd, 10);
      } else if(useDefaults) {
        parameters.frontendPortRangeEnd = parseInt(defaultFrontendPortRangeEnd, 10);
      }

      if(options.backendPort) {
        parameters.backendPort = parseInt(options.backendPort, 10);
      } else if(useDefaults) {
        parameters.backendPort = parseInt(defaultBackendPort, 10);
      }

      parameters.name = name;
      parentItem.inboundNatPools.push(parameters);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating inbound nat pool in load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      parentItem = loadBalancer;
      cli.interaction.formatOutput(utils.findFirstCaseIgnore(parentItem.inboundNatPools, { name: name }), generatorUtils.traverse);
    });

  inboundNatPools.command('set [resource-group] [lb-name] [name]')
    .description($('Update an inbound nat pool'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat pool'))
    .option('-i, --frontend-ip-name [frontend-ip-name]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-id'))
    .option('-d, --frontend-ip-id [frontend-ip-id]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-name'))
    .option('-p, --protocol [protocol]', $('the transport protocol for the' +
      '\n     endpoint. Possible values are \'Udp\' or \'Tcp\' or \'All.\''))
    .option('-f, --frontend-port-range-start [frontend-port-range-start]', $('the first port number in the range of' +
      '\n     external ports that will be used to provide Inbound Nat to NICs associated with' +
      '\n     a load balancer. Acceptable values range between 1 and 65534'))
    .option('-e, --frontend-port-range-end [frontend-port-range-end]', $('the last port number in the range of' +
      '\n     external ports that will be used to provide Inbound Nat to NICs associated with' +
      '\n     a load balancer. Acceptable values range between 1 and 65535'))
    .option('-b, --backend-port [backend-port]', $('the port used for internal connections' +
      '\n     on the endpoint. Acceptable values are between 1 and 65535'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var inboundNatPool = utils.findFirstCaseIgnore(parentItem.inboundNatPools, { name: name });
      if (!inboundNatPool) {
        throw new Error(util.format($('inbound nat pool with name "%s" not found in load balancer "%s"'), name, lbName));
      }

      var parameters = inboundNatPool;

      if(!parameters.frontendIPConfiguration) {
        parameters.frontendIPConfiguration = {};
      }
      if(options.frontendIpId) {
        if(options.frontendIpName) {
          cli.output.warn($('--frontend-ip-name parameter will be ignored because --frontend-ip-id and --frontend-ip-name are mutually exclusive'));
        }
        parameters.frontendIPConfiguration.id = options.frontendIpId;
      } else if(options.frontendIpName) {
        var referredFrontendIPConfiguration = utils.findFirstCaseIgnore(loadBalancer.frontendIPConfigurations, { name: options.frontendIpName });
        if(!referredFrontendIPConfiguration) {
          throw new Error(util.format($('No frontend ip configuration with name "%s" found'), options.frontendIpName));
        }
        var idContainerFrontendIPConfiguration = referredFrontendIPConfiguration;
        parameters.frontendIPConfiguration.id = idContainerFrontendIPConfiguration.id;
      }

      if(options.protocol) {
        parameters.protocol = validation.isIn(options.protocol, ['Udp', 'Tcp', 'All'], '--protocol');
      } else if(useDefaults) {
        parameters.protocol = defaultProtocol;
      }

      if(options.frontendPortRangeStart) {
        parameters.frontendPortRangeStart = parseInt(options.frontendPortRangeStart, 10);
      } else if(useDefaults) {
        parameters.frontendPortRangeStart = parseInt(defaultFrontendPortRangeStart, 10);
      }

      if(options.frontendPortRangeEnd) {
        parameters.frontendPortRangeEnd = parseInt(options.frontendPortRangeEnd, 10);
      } else if(useDefaults) {
        parameters.frontendPortRangeEnd = parseInt(defaultFrontendPortRangeEnd, 10);
      }

      if(options.backendPort) {
        parameters.backendPort = parseInt(options.backendPort, 10);
      } else if(useDefaults) {
        parameters.backendPort = parseInt(defaultBackendPort, 10);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating inbound nat pool in "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      parentItem = loadBalancer;
      cli.interaction.formatOutput(utils.findFirstCaseIgnore(parentItem.inboundNatPools, { name: name }), generatorUtils.traverse);
    });

  inboundNatPools.command('delete [resource-group] [lb-name] [name]')
    .description($('Delete an inbound nat pool'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat pool'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(parentItem.inboundNatPools, { name: name });
      if (index === -1) {
        throw new Error(util.format($('inbound nat pool "%s" not found in load balancer "%s"'), name, lbName));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete inbound nat pool with name "%s" from load balancer "%s"? [y/n] '), name, lbName), _)) {
        return;
      }

      parentItem.inboundNatPools.splice(index, 1);

      progress = cli.interaction.progress('Deleting inbound nat pool');
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }
    });

  inboundNatPools.command('show [resource-group] [lb-name] [name]')
    .description($('Show an inbound nat pool'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat pool'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var inboundNatPool = utils.findFirstCaseIgnore(parentItem.inboundNatPools, { name: name });
      if (!inboundNatPool) {
        cli.output.warn(util.format($('inbound nat pool with name "%s" not found in the load balancer "%s"'), name, lbName));
      }

      cli.interaction.formatOutput(inboundNatPool, generatorUtils.traverse);
    });

  inboundNatPools.command('list [resource-group] [lb-name]')
    .description($('List inbound nat pools'))
    .usage('[options] <resource-group> <lb-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer = null;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      cli.interaction.formatOutput(parentItem.inboundNatPools, function (items) {
        if (!items || items.length === 0) {
          cli.output.warn($('No inbound nat pools found'));
        } else {
          cli.output.table(items, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });
};