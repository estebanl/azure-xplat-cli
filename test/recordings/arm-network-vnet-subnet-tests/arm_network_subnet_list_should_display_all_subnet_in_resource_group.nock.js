// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"subnetName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n      \"etag\": \"W/\\\"c9871f91-d5e8-43cb-8472-b0be85034d00\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/24\",\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n        },\r\n        \"routeTable\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '847',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f0743b4c-bec4-4cf0-868b-87b91bb17445',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'e7b39ba8-a7c9-477a-8a27-21416a8e52e0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T072209Z:e7b39ba8-a7c9-477a-8a27-21416a8e52e0',
  date: 'Wed, 12 Jul 2017 07:22:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"subnetName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n      \"etag\": \"W/\\\"c9871f91-d5e8-43cb-8472-b0be85034d00\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/24\",\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n        },\r\n        \"routeTable\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '847',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f0743b4c-bec4-4cf0-868b-87b91bb17445',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'e7b39ba8-a7c9-477a-8a27-21416a8e52e0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T072209Z:e7b39ba8-a7c9-477a-8a27-21416a8e52e0',
  date: 'Wed, 12 Jul 2017 07:22:09 GMT',
  connection: 'close' });
 return result; }]];