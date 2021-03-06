// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'East Asia';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_STORAGE_TEST_KIND'] = 'storage';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'East Asia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-12-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '012324d7-c4c8-454a-8aa5-71fabfb7f057',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '012324d7-c4c8-454a-8aa5-71fabfb7f057',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093740Z:012324d7-c4c8-454a-8aa5-71fabfb7f057',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:37:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-12-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '012324d7-c4c8-454a-8aa5-71fabfb7f057',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '012324d7-c4c8-454a-8aa5-71fabfb7f057',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093740Z:012324d7-c4c8-454a-8aa5-71fabfb7f057',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:37:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4375/providers/Microsoft.Storage/storageAccounts/armclistorageaccount7116?api-version=2016-12-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/operations/ec9ae272-6a1b-4b85-8cac-5aba44fa9662?monitor=true&api-version=2016-12-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'f43bf6cc-d191-47bc-ac5d-bca0b7e21ce9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f43bf6cc-d191-47bc-ac5d-bca0b7e21ce9',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093743Z:f43bf6cc-d191-47bc-ac5d-bca0b7e21ce9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:37:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4375/providers/Microsoft.Storage/storageAccounts/armclistorageaccount7116?api-version=2016-12-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/operations/ec9ae272-6a1b-4b85-8cac-5aba44fa9662?monitor=true&api-version=2016-12-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'f43bf6cc-d191-47bc-ac5d-bca0b7e21ce9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f43bf6cc-d191-47bc-ac5d-bca0b7e21ce9',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093743Z:f43bf6cc-d191-47bc-ac5d-bca0b7e21ce9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:37:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/operations/ec9ae272-6a1b-4b85-8cac-5aba44fa9662?monitor=true&api-version=2016-12-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4375/providers/Microsoft.Storage/storageAccounts/armclistorageaccount7116\",\"kind\":\"BlobStorage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount7116\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2017-02-13T09:37:42.9428099Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:37:42.9418076Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:37:42.9418076Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount7116.blob.core.windows.net/\",\"table\":\"https://armclistorageaccount7116.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '877',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8bfd921d-73c7-48a3-9493-6ebb5bc2ff48',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8bfd921d-73c7-48a3-9493-6ebb5bc2ff48',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093814Z:8bfd921d-73c7-48a3-9493-6ebb5bc2ff48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/operations/ec9ae272-6a1b-4b85-8cac-5aba44fa9662?monitor=true&api-version=2016-12-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4375/providers/Microsoft.Storage/storageAccounts/armclistorageaccount7116\",\"kind\":\"BlobStorage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount7116\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2017-02-13T09:37:42.9428099Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:37:42.9418076Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:37:42.9418076Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount7116.blob.core.windows.net/\",\"table\":\"https://armclistorageaccount7116.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '877',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8bfd921d-73c7-48a3-9493-6ebb5bc2ff48',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8bfd921d-73c7-48a3-9493-6ebb5bc2ff48',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093814Z:8bfd921d-73c7-48a3-9493-6ebb5bc2ff48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:13 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclistorageaccount7116'];};