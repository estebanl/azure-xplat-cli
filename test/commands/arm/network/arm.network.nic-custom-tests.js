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

'use strict';

var should = require('should');
var util = require('util');
var utils = require('../../../../lib/util/utils');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var networkUtil = new NetworkTestUtil();
var VMTestUtil = require('../../../util/vmTestUtil');
var vmUtil = new VMTestUtil();

var testPrefix = 'arm-network-nic-custom-tests',
  groupName = 'xplat-test-nic-custom',
  location = 'eastus',
  vnetName = 'test-vnet',
  vnetAddressSpace = '10.0.0.0/8',
  subnetName = 'test-subnet',
  subnetAddressPrefix = '10.0.0.0/24',
  nsgName = 'test-nsg',
  poolName = 'test-pool',
  inboundRuleName = 'test-inbound-rule',
  subnetId,
  publicIpId,
  protocol = 'tcp',
  frontendPort = '90',
  backendPort = '90';

var nicProp = {
  group: groupName,
  name: 'test-nic',
  privateIPAddress: '10.0.0.22',
  newPrivateIPAddress: '10.0.0.25',
  privateIPAddressVersion: 'IPv4',
  newPrivateIPAddressVersion: 'IPv6',
  internalDnsNameLabel: 'internal-dns-foo',
  newInternalDnsNameLabel: 'internal-dns-bar',
  ipConfigName: 'another-ip-config',
  enableIpForwarding: false,
  newEnableIpForwarding: true,
  tags: networkUtil.tags,
  newTags: networkUtil.newTags,
  attachedVMName: 'tempXplatVMForNicTests',
  attachedVMStorageAccount: 'xplateffectiveaccount'
};
var ipConfigProp1 = {
  name: 'config01'
};
var ipConfigProp2 = {
  name: 'config02',
  privateIPAddress: '10.0.0.26',
  subnetName: subnetName,
  vnetName: vnetName,
  isPrimary: true
};
var publicIpProp = {
  name: 'test-ip',
  domainName: 'foo-domain-test',
  allocationMethod: 'Static',
  ipVersion: 'IPv4',
  idleTimeout: 4,
  tags: networkUtil.tags
};
var lbProp = {
  name: 'test-lb',
  fipName: 'test-fip',
  publicIpProp: {
    name: 'test-fip-ip',
    domainName: 'baz-domain-test',
    allocationMethod: 'Dynamic',
    ipVersion: 'IPv4',
    idleTimeout: 4,
    tags: networkUtil.tags
  }
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'eastus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5, hour = 60 * 60000;

    before(function (done) {
      this.timeout(hour);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = 'WestEurope';

        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);

        nicProp.location = location;
        nicProp.group = groupName;
        nicProp.name = suite.isMocked ? nicProp.name : suite.generateId(nicProp.name, null);

        vnetName = suite.isMocked ? vnetName : suite.generateId(vnetName, null);
        subnetName = suite.isMocked ? subnetName : suite.generateId(subnetName, null);
        nsgName = suite.isMocked ? nsgName : suite.generateId(nsgName, null);

        ipConfigProp1.group = groupName;
        ipConfigProp1.nicName = nicProp.name;
        
        ipConfigProp2.group = groupName;
        ipConfigProp2.nicName = nicProp.name;
        ipConfigProp2.vnetName = vnetName;
        ipConfigProp2.subnetName = subnetName;

        publicIpProp.location = location;
        publicIpProp.group = groupName;
        publicIpProp.name = suite.isMocked ? publicIpProp.name : suite.generateId(publicIpProp.name, null);

        lbProp.location = location;
        lbProp.group = groupName;
        lbProp.name = suite.isMocked ? lbProp.name : suite.generateId(lbProp.name, null);
        lbProp.publicIpProp.location = location;
        lbProp.publicIpProp.group = groupName;

        poolName = suite.isMocked ? poolName : suite.generateId(poolName, null);
        inboundRuleName = suite.isMocked ? inboundRuleName : suite.generateId(inboundRuleName, null);

        if (!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
            networkUtil.createVnet(groupName, vnetName, location, vnetAddressSpace, suite, function () {
              networkUtil.createSubnet(groupName, vnetName, subnetName, subnetAddressPrefix, suite, function (subnet) {
                subnetId = subnet.id;
                networkUtil.createPublicIp(publicIpProp, suite, function (publicIp) {
                  publicIpId = publicIp.id;
                  done();
                });
              })
            })
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('nic custom', function () {
      this.timeout(hour);
      it('create should create nic with default ip configuration', function (done) {
        var cmd = ('network nic create -g {group} -n {name} -l {location} -a {privateIPAddress} ' +
          '-r {internalDnsNameLabel} -f {enableIpForwarding} -t {tags} -u {1} -i {2} --json').formatArgs(nicProp, subnetId, publicIpId);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.name.should.equal(nicProp.name);
          output.enableIPForwarding.should.equal(nicProp.enableIpForwarding);
          output.ipConfigurations.length.should.equal(1);
          output.dnsSettings.internalDnsNameLabel.should.equal(nicProp.internalDnsNameLabel);

          var defaultIpConfig = output.ipConfigurations[0];
          defaultIpConfig.subnet.id.should.containEql(subnetName);
          defaultIpConfig.publicIPAddress.id.should.containEql(publicIpProp.name);
          defaultIpConfig.privateIPAddress.should.equal(nicProp.privateIPAddress);

          networkUtil.shouldBeSucceeded(defaultIpConfig);
          networkUtil.shouldHaveTags(output);
          networkUtil.shouldBeSucceeded(output);
          done();
        });
      });
      
      it('show should display nic details', function (done) {
        var cmd = 'network nic show -g {group} -n {name} --json'.formatArgs(nicProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.name.should.equal(nicProp.name);
          output.enableIPForwarding.should.equal(nicProp.enableIpForwarding);
          output.dnsSettings.internalDnsNameLabel.should.equal(nicProp.internalDnsNameLabel);
          output.ipConfigurations.length.should.equal(1);

          var defaultIpConfig = output.ipConfigurations[0];
          defaultIpConfig.subnet.id.should.containEql(subnetName);
          defaultIpConfig.publicIPAddress.id.should.containEql(publicIpProp.name);
          defaultIpConfig.privateIPAddress.should.equal(nicProp.privateIPAddress);

          networkUtil.shouldBeSucceeded(defaultIpConfig);
          networkUtil.shouldHaveTags(output);
          networkUtil.shouldBeSucceeded(output);
          done();
        });
      });
      
      it('set should modify nic', function (done) {
        var cmd = ('network nic set -g {group} -n {name} -r {newInternalDnsNameLabel} -f {newEnableIpForwarding} ' +
          '-t {newTags} --json').formatArgs(nicProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.enableIPForwarding.should.equal(nicProp.newEnableIpForwarding);
          output.dnsSettings.internalDnsNameLabel.should.equal(nicProp.newInternalDnsNameLabel);

          networkUtil.shouldAppendTags(output);
          networkUtil.shouldBeSucceeded(output);
          done();
        });
      });

      it('effective-route-table and effective-nsg commands should work', function (done) {
        var cmd = 'network nic show -g {group} -n {name} --json'.formatArgs(nicProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          cmd = 'network nic effective-nsg list {group} {name} --json'.formatArgs(nicProp);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.not.equal(0);
            cmd = 'network nic effective-route-table show {group} {name} --json'.formatArgs(nicProp);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.not.equal(0);
              vmUtil.CreateVmWithNic(nicProp.group, nicProp.attachedVMName, location, 'Linux', 'Debian', output.name, 'xplatuser', 'Pa$$word1', nicProp.attachedVMStorageAccount, suite, function(result) {
                cmd = 'network nic effective-nsg list {group} {name} --json'.formatArgs(nicProp);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  cmd = 'network nic effective-route-table show {group} {name} --json'.formatArgs(nicProp);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    result.exitStatus.should.equal(0);
                    vmUtil.RemoveVm(nicProp.group, nicProp.attachedVMName, suite, function(result) {
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });

      it('ip-config create should should create another ip configuration', function (done) {
        var cmd = 'network nic ip-config create -g {group} -c {name} -n {ipConfigName} -b {newPrivateIPAddressVersion} --json'.formatArgs(nicProp);

        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.ipConfigurations.length.should.equal(2);

          var anotherIpConfig = output.ipConfigurations[1];
          anotherIpConfig.name.should.equal(nicProp.ipConfigName);
          anotherIpConfig.privateIPAddressVersion.should.equal(nicProp.newPrivateIPAddressVersion);

          networkUtil.shouldBeSucceeded(anotherIpConfig);
          networkUtil.shouldBeSucceeded(output);
          done();
        });
      });
      
      it('ip-config list should should list ip configurations in nic', function (done) {
        var cmd = 'network nic ip-config list -g {group} -c {name} --json'.formatArgs(nicProp);

        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.length.should.equal(2);
          _.some(output, function (ipConfig) {
            return ipConfig.name === nicProp.ipConfigName;
          }).should.be.true;
          
          done();
        });
      });
      
      it('ip-config show should display details of ip configuration', function (done) {
        var cmd = 'network nic ip-config show -g {group} -c {name} -n {ipConfigName} --json'.formatArgs(nicProp);

        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.name.should.equal(nicProp.ipConfigName);
          output.privateIPAddressVersion.should.equal(nicProp.newPrivateIPAddressVersion);
          
          networkUtil.shouldBeSucceeded(output);
          done();
        });
      });
      
      it('ip-config delete should delete ip configuration', function (done) {
        var cmd = 'network nic ip-config delete -g {group} -c {name} -n {ipConfigName} --quiet --json'.formatArgs(nicProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network nic ip-config show -g {group} -c {name} -n {ipConfigName} --json'.formatArgs(nicProp);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });

      it('ip-config set should attach address pool to ip configuration', function (done) {
        networkUtil.createLB(lbProp, suite, function () {
          networkUtil.createAddressPool(groupName, lbProp.name, poolName, suite, function (pool) {
            var cmd = 'network nic ip-config set -g {group} -c {name} -n default-ip-config -d {1} --json'.formatArgs(nicProp, pool.id);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);

              var defaultIpConfig = output.ipConfigurations[0];
              var pools = defaultIpConfig.loadBalancerBackendAddressPools;
              pools.length.should.equal(1);
              pools[0].id.should.equal(pool.id);
              
              done();
            });
          });
        });
      });
      
      it('ip-config set should detach address pool from ip configuration', function (done) {
        var cmd = 'network nic ip-config set -g {group} -c {name} -n default-ip-config -d --json'.formatArgs(nicProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.ipConfigurations.length.should.equal(1);
          output.ipConfigurations[0].should.not.have.property('loadBalancerBackendAddressPools');
          
          done();
        });
      });

      it('ip-config set should attach inbound nat rule to ip configuration', function (done) {
        networkUtil.createInboundNatRule(groupName, lbProp.name, inboundRuleName, protocol, frontendPort, backendPort, 'true', 10, lbProp.fipName, suite, function (natRule) {
          var cmd = 'network nic ip-config set -g {group} -c {name} -n default-ip-config -e {1} --json'.formatArgs(nicProp, natRule.id);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);

            var rules = output.ipConfigurations[0].loadBalancerInboundNatRules;
            rules.length.should.equal(1);
            rules[0].id.should.equal(natRule.id);
            
            done();
          });
        });
      });
      
      it('ip-config set should detach inbound nat rule from ip configuration', function (done) {
        var cmd = 'network nic ip-config set -g {group} -c {name} -n default-ip-config -e --json'.formatArgs(nicProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.ipConfigurations.length.should.equal(1);
          output.ipConfigurations[0].should.not.have.property('loadBalancerInboundNatRules');
          
          done();
        });
      });

      it('ip-config address-pool create should attach address pool to ip configuration', function (done) {
        var cmd = 'network nic ip-config address-pool create -g {group} -c {name} -n default-ip-config -l {1} -a {2} --json'.formatArgs(nicProp, lbProp.name, poolName);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.ipConfigurations.length.should.equal(1);
          var pools = output.ipConfigurations[0].loadBalancerBackendAddressPools;
          pools.length.should.equal(1);
          pools[0].id.should.containEql(poolName);
          
          done();
        });
      });
      
      it('ip-config address-pool delete should detach address-pool from ip configuration', function (done) {
        var cmd = 'network nic ip-config address-pool delete -g {group} -c {name} -n default-ip-config -l {1} -a {2} --json'.formatArgs(nicProp, lbProp.name, poolName);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.ipConfigurations.length.should.equal(1);
          output.ipConfigurations[0].should.not.have.property('loadBalancerBackendAddressPools');
          
          done();
        });
      });

      it('ip-config inbound-nat-rule create should attach inbound nat rule to ip configuration', function (done) {
        var cmd = 'network nic ip-config inbound-nat-rule create -g {group} -c {name} -n default-ip-config -l {1} -r {2} --json'.formatArgs(nicProp, lbProp.name, inboundRuleName);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.ipConfigurations.length.should.equal(1);
          var rules = output.ipConfigurations[0].loadBalancerInboundNatRules;
          rules.length.should.equal(1);
          rules[0].id.should.containEql(inboundRuleName);
          
          done();
        });
      });
      
      it('ip-config inbound-nat-rule delete should detach inbound nat rule from ip configuration', function (done) {
        var cmd = 'network nic ip-config inbound-nat-rule delete -g {group} -c {name} -n default-ip-config -l {1} -r {2} --json'.formatArgs(nicProp, lbProp.name, inboundRuleName);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.ipConfigurations.length.should.equal(1);
          output.ipConfigurations[0].should.not.have.property('loadBalancerInboundNatRules');
          
          done();
        });
      });
      
      it('ip-config set should detach public ip from ip configuration', function (done) {
        var cmd = 'network nic ip-config set -g {group} -c {name} -n default-ip-config --public-ip-name \'\' --json'.formatArgs(nicProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.ipConfigurations.length.should.equal(1);
          output.ipConfigurations[0].should.not.have.property('publicIPAddress');

          done();
        });
      });

      it('ip-config create should create second ip configuration', function (done) {
        var cmd = 'network nic ip-config create -g {group} -c {nicName} -n {name} --json'.formatArgs(ipConfigProp1);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          var createdConfig = utils.findFirstCaseIgnore(output.ipConfigurations, {name: ipConfigProp1.name});
          createdConfig.should.not.be.empty;
          
          networkUtil.shouldBeSucceeded(createdConfig);
          done();
        });
      });
      
      it('ip-config create should create third ip configuration', function (done) {
        var cmd = 'network nic ip-config create -g {group} -c {nicName} -n {name} -m {vnetName} -k {subnetName} -y {isPrimary} -q --json'.formatArgs(ipConfigProp2);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          var createdConfig = utils.findFirstCaseIgnore(output.ipConfigurations, {name: ipConfigProp2.name});
          createdConfig.should.not.be.empty;
          createdConfig.primary.should.be.true;

          _.some(output.ipConfigurations, function (ipConfig) {
            return ipConfig.isPrimary === true && ipConfig.name === ipConfigProp2.name;
          }).should.be.false;
          
          networkUtil.shouldBeSucceeded(createdConfig);
          done();
        });
      });
      
      it('ip-config set should set second ip configuration as primary', function (done) {
        var cmd = 'network nic ip-config set -g {group} -c {nicName} -n {name} -y true --json'.formatArgs(ipConfigProp1);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          var primaryConfig = utils.findFirstCaseIgnore(output.ipConfigurations, {name: ipConfigProp1.name});
          primaryConfig.primary.should.be.true;
          
          done();
        });
      });
      
      it('ip-config delete should delete third ip configuration', function (done) {
        var cmd = 'network nic ip-config delete -g {group} -c {nicName} -n {name} -q --json'.formatArgs(ipConfigProp2);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          _.some(output.ipConfigurations, function (ipConfig) {
            return ipConfig.name === ipConfigProp2.name;
          }).should.be.false;
          
          done();
        });
      });
      
      it('delete should delete nic', function (done) {
        var cmd = 'network nic delete -g {group} -n {name} --quiet --json'.formatArgs(nicProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network nic show -g {group} -n {name} --json'.formatArgs(nicProp);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });
    });
  });
});