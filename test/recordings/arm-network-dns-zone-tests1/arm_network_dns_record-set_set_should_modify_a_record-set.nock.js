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
    registeredProviders: ['mobileservice', 'website'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-0218-3cf34e6ad201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-0218-3cf34e6ad201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd5293c84-9ede-4087-b087-905741cc3b75',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': 'f3131eb2-7c59-4a45-b596-b60a1a5b0217',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080414Z:f3131eb2-7c59-4a45-b596-b60a1a5b0217',
  date: 'Mon, 09 Jan 2017 08:04:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-0218-3cf34e6ad201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-0218-3cf34e6ad201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd5293c84-9ede-4087-b087-905741cc3b75',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': 'f3131eb2-7c59-4a45-b596-b60a1a5b0217',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080414Z:f3131eb2-7c59-4a45-b596-b60a1a5b0217',
  date: 'Mon, 09 Jan 2017 08:04:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"2a90aaff-6058-46f4-b40e-57dc70000bf2\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":3600,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '2a90aaff-6058-46f4-b40e-57dc70000bf2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '135cec04-e41c-4afb-956f-d4617401b1b7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '6e967402-c6f1-4c98-aba1-8f0c356c41ce',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080415Z:6e967402-c6f1-4c98-aba1-8f0c356c41ce',
  date: 'Mon, 09 Jan 2017 08:04:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"2a90aaff-6058-46f4-b40e-57dc70000bf2\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":3600,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '2a90aaff-6058-46f4-b40e-57dc70000bf2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '135cec04-e41c-4afb-956f-d4617401b1b7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '6e967402-c6f1-4c98-aba1-8f0c356c41ce',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080415Z:6e967402-c6f1-4c98-aba1-8f0c356c41ce',
  date: 'Mon, 09 Jan 2017 08:04:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"8331bd70-9812-42ae-bdfc-06bccc75c23a\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '8331bd70-9812-42ae-bdfc-06bccc75c23a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5fa52624-a462-440b-8c64-fec1a2c73ace',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '78f6d3e8-eb41-48a9-8e25-61a2ff3400ad',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080416Z:78f6d3e8-eb41-48a9-8e25-61a2ff3400ad',
  date: 'Mon, 09 Jan 2017 08:04:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"8331bd70-9812-42ae-bdfc-06bccc75c23a\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '8331bd70-9812-42ae-bdfc-06bccc75c23a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5fa52624-a462-440b-8c64-fec1a2c73ace',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '78f6d3e8-eb41-48a9-8e25-61a2ff3400ad',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080416Z:78f6d3e8-eb41-48a9-8e25-61a2ff3400ad',
  date: 'Mon, 09 Jan 2017 08:04:16 GMT',
  connection: 'close' });
 return result; }]];