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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus2';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"2932f960-af06-44f8-8f64-d72175e79597\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"ipAddress\": \"13.68.100.36\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '804',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2932f960-af06-44f8-8f64-d72175e79597"',
  'x-ms-request-id': 'de62897f-e46a-4429-98d5-34343fb543ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '5a2e1414-94d2-4d09-bf4b-80e7f6cf1d12',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122428Z:5a2e1414-94d2-4d09-bf4b-80e7f6cf1d12',
  date: 'Mon, 18 Sep 2017 12:24:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"2932f960-af06-44f8-8f64-d72175e79597\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"ipAddress\": \"13.68.100.36\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '804',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2932f960-af06-44f8-8f64-d72175e79597"',
  'x-ms-request-id': 'de62897f-e46a-4429-98d5-34343fb543ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '5a2e1414-94d2-4d09-bf4b-80e7f6cf1d12',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122428Z:5a2e1414-94d2-4d09-bf4b-80e7f6cf1d12',
  date: 'Mon, 18 Sep 2017 12:24:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"50f2d767-52d3-43fb-8d7f-02fcb69cac40\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 14,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelset\",\r\n      \"fqdn\": \"labelset.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '764',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '9e9126c4-65c8-4eab-8e85-2f324e777f88',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/9e9126c4-65c8-4eab-8e85-2f324e777f88?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '0d7f020a-3c7b-4bd6-b0c6-cef8479d7f9b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122430Z:0d7f020a-3c7b-4bd6-b0c6-cef8479d7f9b',
  date: 'Mon, 18 Sep 2017 12:24:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"50f2d767-52d3-43fb-8d7f-02fcb69cac40\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 14,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelset\",\r\n      \"fqdn\": \"labelset.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '764',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '9e9126c4-65c8-4eab-8e85-2f324e777f88',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/9e9126c4-65c8-4eab-8e85-2f324e777f88?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '0d7f020a-3c7b-4bd6-b0c6-cef8479d7f9b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122430Z:0d7f020a-3c7b-4bd6-b0c6-cef8479d7f9b',
  date: 'Mon, 18 Sep 2017 12:24:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/9e9126c4-65c8-4eab-8e85-2f324e777f88?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fd9bd9c5-3c90-4ee4-b81a-0542b918a1f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '4122dcef-8ea0-4c2f-90c7-2e36a9639d45',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122501Z:4122dcef-8ea0-4c2f-90c7-2e36a9639d45',
  date: 'Mon, 18 Sep 2017 12:25:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/9e9126c4-65c8-4eab-8e85-2f324e777f88?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fd9bd9c5-3c90-4ee4-b81a-0542b918a1f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '4122dcef-8ea0-4c2f-90c7-2e36a9639d45',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122501Z:4122dcef-8ea0-4c2f-90c7-2e36a9639d45',
  date: 'Mon, 18 Sep 2017 12:25:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"37774174-34c6-45f7-b19e-17fca2b97a34\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 14,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelset\",\r\n      \"fqdn\": \"labelset.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '765',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"37774174-34c6-45f7-b19e-17fca2b97a34"',
  'x-ms-request-id': '766819cf-9b02-4a34-8e4a-36cef3c52deb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '68c43993-ce8c-41ae-ae4e-71bcc3bc449a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122502Z:68c43993-ce8c-41ae-ae4e-71bcc3bc449a',
  date: 'Mon, 18 Sep 2017 12:25:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"37774174-34c6-45f7-b19e-17fca2b97a34\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 14,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelset\",\r\n      \"fqdn\": \"labelset.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '765',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"37774174-34c6-45f7-b19e-17fca2b97a34"',
  'x-ms-request-id': '766819cf-9b02-4a34-8e4a-36cef3c52deb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '68c43993-ce8c-41ae-ae4e-71bcc3bc449a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122502Z:68c43993-ce8c-41ae-ae4e-71bcc3bc449a',
  date: 'Mon, 18 Sep 2017 12:25:02 GMT',
  connection: 'close' });
 return result; }]];