// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333/firewallRules/xplattestadls2110?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"startIpAddress\":\"0.0.0.0\",\"endIpAddress\":\"0.0.0.1\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333/firewallRules/xplattestadls2110\",\"name\":\"xplattestadls2110\",\"type\":\"Microsoft.DataLakeStore/accounts/firewallRules\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '335',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bfb96e1e-5504-45e1-8d87-83b3542967e9',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'f7c677b6-035f-4df1-a75d-9ec611956f97',
  'x-ms-routing-request-id': 'WESTUS2:20161202T010510Z:f7c677b6-035f-4df1-a75d-9ec611956f97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:05:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333/firewallRules/xplattestadls2110?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"startIpAddress\":\"0.0.0.0\",\"endIpAddress\":\"0.0.0.1\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333/firewallRules/xplattestadls2110\",\"name\":\"xplattestadls2110\",\"type\":\"Microsoft.DataLakeStore/accounts/firewallRules\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '335',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bfb96e1e-5504-45e1-8d87-83b3542967e9',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'f7c677b6-035f-4df1-a75d-9ec611956f97',
  'x-ms-routing-request-id': 'WESTUS2:20161202T010510Z:f7c677b6-035f-4df1-a75d-9ec611956f97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:05:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333/firewallRules/xplattestadls2110?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"startIpAddress\":\"127.0.0.1\",\"endIpAddress\":\"127.0.0.2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333/firewallRules/xplattestadls2110\",\"name\":\"xplattestadls2110\",\"type\":\"Microsoft.DataLakeStore/accounts/firewallRules\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '339',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '093cbd6e-c8e3-4bad-8f81-05bfc459789c',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '4ba9372e-2a8c-41d9-8c8d-e7d84d7dc687',
  'x-ms-routing-request-id': 'WESTUS2:20161202T010511Z:4ba9372e-2a8c-41d9-8c8d-e7d84d7dc687',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:05:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333/firewallRules/xplattestadls2110?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"startIpAddress\":\"127.0.0.1\",\"endIpAddress\":\"127.0.0.2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333/firewallRules/xplattestadls2110\",\"name\":\"xplattestadls2110\",\"type\":\"Microsoft.DataLakeStore/accounts/firewallRules\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '339',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '093cbd6e-c8e3-4bad-8f81-05bfc459789c',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '4ba9372e-2a8c-41d9-8c8d-e7d84d7dc687',
  'x-ms-routing-request-id': 'WESTUS2:20161202T010511Z:4ba9372e-2a8c-41d9-8c8d-e7d84d7dc687',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:05:11 GMT',
  connection: 'close' });
 return result; }]];