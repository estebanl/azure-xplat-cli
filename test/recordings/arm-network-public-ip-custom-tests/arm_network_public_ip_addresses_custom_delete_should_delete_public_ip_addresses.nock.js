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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"e91d1f74-6aff-47d0-b22f-dedab86353f2\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"931154f1-89b0-4330-afab-db28bc588fa5\",\r\n    \"ipAddress\": \"52.187.122.1\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '755',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e91d1f74-6aff-47d0-b22f-dedab86353f2"',
  'x-ms-request-id': 'fdf55b10-fd61-412e-b8d9-bc083567067e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '58766bb9-4be7-447b-bf62-6e88f41785e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123809Z:58766bb9-4be7-447b-bf62-6e88f41785e7',
  date: 'Thu, 22 Jun 2017 12:38:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"e91d1f74-6aff-47d0-b22f-dedab86353f2\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"931154f1-89b0-4330-afab-db28bc588fa5\",\r\n    \"ipAddress\": \"52.187.122.1\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '755',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e91d1f74-6aff-47d0-b22f-dedab86353f2"',
  'x-ms-request-id': 'fdf55b10-fd61-412e-b8d9-bc083567067e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '58766bb9-4be7-447b-bf62-6e88f41785e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123809Z:58766bb9-4be7-447b-bf62-6e88f41785e7',
  date: 'Thu, 22 Jun 2017 12:38:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operationResults/16329a89-b5b1-46bb-8f3f-160b83b06fd9?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '16329a89-b5b1-46bb-8f3f-160b83b06fd9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/16329a89-b5b1-46bb-8f3f-160b83b06fd9?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '36d5710f-dd79-44a5-a273-5503ec8c8c66',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123811Z:36d5710f-dd79-44a5-a273-5503ec8c8c66',
  date: 'Thu, 22 Jun 2017 12:38:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operationResults/16329a89-b5b1-46bb-8f3f-160b83b06fd9?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '16329a89-b5b1-46bb-8f3f-160b83b06fd9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/16329a89-b5b1-46bb-8f3f-160b83b06fd9?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '36d5710f-dd79-44a5-a273-5503ec8c8c66',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123811Z:36d5710f-dd79-44a5-a273-5503ec8c8c66',
  date: 'Thu, 22 Jun 2017 12:38:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/16329a89-b5b1-46bb-8f3f-160b83b06fd9?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '62069678-cf9f-46ec-915d-11faa17a0a97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '4a8e9108-b123-4c33-a0ae-eaa78417f92d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123842Z:4a8e9108-b123-4c33-a0ae-eaa78417f92d',
  date: 'Thu, 22 Jun 2017 12:38:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/16329a89-b5b1-46bb-8f3f-160b83b06fd9?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '62069678-cf9f-46ec-915d-11faa17a0a97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '4a8e9108-b123-4c33-a0ae-eaa78417f92d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123842Z:4a8e9108-b123-4c33-a0ae-eaa78417f92d',
  date: 'Thu, 22 Jun 2017 12:38:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip-custom' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '26ec862b-d6e7-44ec-a6c4-b4893f9da53e',
  'x-ms-correlation-request-id': '26ec862b-d6e7-44ec-a6c4-b4893f9da53e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123843Z:26ec862b-d6e7-44ec-a6c4-b4893f9da53e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Jun 2017 12:38:43 GMT',
  connection: 'close',
  'content-length': '186' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip-custom' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '26ec862b-d6e7-44ec-a6c4-b4893f9da53e',
  'x-ms-correlation-request-id': '26ec862b-d6e7-44ec-a6c4-b4893f9da53e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123843Z:26ec862b-d6e7-44ec-a6c4-b4893f9da53e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Jun 2017 12:38:43 GMT',
  connection: 'close',
  'content-length': '186' });
 return result; }]];