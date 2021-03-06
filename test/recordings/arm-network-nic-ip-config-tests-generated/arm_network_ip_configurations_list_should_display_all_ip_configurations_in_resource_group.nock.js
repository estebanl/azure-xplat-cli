// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"1ef1cffb-d05e-478f-ba42-12ae5e3d1f5f\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"396bd50b-4998-4fe8-aafd-bcbfdb2a20af\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"1ef1cffb-d05e-478f-ba42-12ae5e3d1f5f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"1ef1cffb-d05e-478f-ba42-12ae5e3d1f5f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ing1blfrhweexb2njqfzxbvqlh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2581',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1ef1cffb-d05e-478f-ba42-12ae5e3d1f5f"',
  'x-ms-request-id': 'd222e93b-014e-408d-b05a-683efbb895a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c4b631de-e7ef-4416-a414-9773dc2d52c5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T090828Z:c4b631de-e7ef-4416-a414-9773dc2d52c5',
  date: 'Wed, 27 Sep 2017 09:08:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"1ef1cffb-d05e-478f-ba42-12ae5e3d1f5f\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"396bd50b-4998-4fe8-aafd-bcbfdb2a20af\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"1ef1cffb-d05e-478f-ba42-12ae5e3d1f5f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"1ef1cffb-d05e-478f-ba42-12ae5e3d1f5f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ing1blfrhweexb2njqfzxbvqlh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2581',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1ef1cffb-d05e-478f-ba42-12ae5e3d1f5f"',
  'x-ms-request-id': 'd222e93b-014e-408d-b05a-683efbb895a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c4b631de-e7ef-4416-a414-9773dc2d52c5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T090828Z:c4b631de-e7ef-4416-a414-9773dc2d52c5',
  date: 'Wed, 27 Sep 2017 09:08:28 GMT',
  connection: 'close' });
 return result; }]];
