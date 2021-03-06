// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/Microsoft.Compute/artifacttypes/vmextension/types?api-version=2017-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"BGInfo\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"CustomScriptExtension\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/CustomScriptExtension\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"JsonADDomainExtension\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/JsonADDomainExtension\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"VMAccessAgent\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/VMAccessAgent\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1089',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1f3ad383-bb66-4279-b2a8-fbbcd093a7e3_131330592762137227',
  'x-ms-request-id': '546d3d4d-9f43-42e5-9aba-d95bad663ee2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14841',
  'x-ms-correlation-request-id': 'ddd79e55-fae7-4356-a8dc-1a03d9898609',
  'x-ms-routing-request-id': 'WESTUS:20170602T151939Z:ddd79e55-fae7-4356-a8dc-1a03d9898609',
  date: 'Fri, 02 Jun 2017 15:19:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/Microsoft.Compute/artifacttypes/vmextension/types?api-version=2017-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"BGInfo\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"CustomScriptExtension\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/CustomScriptExtension\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"JsonADDomainExtension\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/JsonADDomainExtension\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"VMAccessAgent\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/VMAccessAgent\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1089',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1f3ad383-bb66-4279-b2a8-fbbcd093a7e3_131330592762137227',
  'x-ms-request-id': '546d3d4d-9f43-42e5-9aba-d95bad663ee2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14841',
  'x-ms-correlation-request-id': 'ddd79e55-fae7-4356-a8dc-1a03d9898609',
  'x-ms-routing-request-id': 'WESTUS:20170602T151939Z:ddd79e55-fae7-4356-a8dc-1a03d9898609',
  date: 'Fri, 02 Jun 2017 15:19:39 GMT',
  connection: 'close' });
 return result; }]];
