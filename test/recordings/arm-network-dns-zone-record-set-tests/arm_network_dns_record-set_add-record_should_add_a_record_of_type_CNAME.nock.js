// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-149d-812c5c59d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-06.ppe.azure-dns.com.\",\"ns2-06.ppe.azure-dns.net.\",\"ns3-06.ppe.azure-dns.org.\",\"ns4-06.ppe.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-149d-812c5c59d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f47e1c1f-7142-4b50-9452-cad54a8c5a5b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'd6107d1d-25ee-4922-b7a4-1d91a7835e53',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131147Z:d6107d1d-25ee-4922-b7a4-1d91a7835e53',
  date: 'Thu, 09 Nov 2017 13:11:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-149d-812c5c59d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-06.ppe.azure-dns.com.\",\"ns2-06.ppe.azure-dns.net.\",\"ns3-06.ppe.azure-dns.org.\",\"ns4-06.ppe.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-149d-812c5c59d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f47e1c1f-7142-4b50-9452-cad54a8c5a5b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'd6107d1d-25ee-4922-b7a4-1d91a7835e53',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131147Z:d6107d1d-25ee-4922-b7a4-1d91a7835e53',
  date: 'Thu, 09 Nov 2017 13:11:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/CNAME/set-cname?api-version=2017-09-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-cname' does not exist in resource group 'xplat-test-dns-zone-record-set3499' of subscription '947d47b4-7883-4bb9-9d85-c5e8e2f572ce'.\"}", { 'cache-control': 'private',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cf458f9f-e859-4ef2-aa0a-31bb7479c3c9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b6e8193c-cbfa-469b-a65e-7d35ed14bd26',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131148Z:b6e8193c-cbfa-469b-a65e-7d35ed14bd26',
  date: 'Thu, 09 Nov 2017 13:11:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/CNAME/set-cname?api-version=2017-09-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-cname' does not exist in resource group 'xplat-test-dns-zone-record-set3499' of subscription '947d47b4-7883-4bb9-9d85-c5e8e2f572ce'.\"}", { 'cache-control': 'private',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cf458f9f-e859-4ef2-aa0a-31bb7479c3c9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b6e8193c-cbfa-469b-a65e-7d35ed14bd26',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131148Z:b6e8193c-cbfa-469b-a65e-7d35ed14bd26',
  date: 'Thu, 09 Nov 2017 13:11:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/CNAME/set-cname?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"cdcba354-d866-4582-973f-f38a16dc5bc0\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: 'cdcba354-d866-4582-973f-f38a16dc5bc0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '06f7615d-bb38-486b-9ad9-ba83dca2efae',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7994e1b3-b71e-4734-a37f-e9cf9471e1ad',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131149Z:7994e1b3-b71e-4734-a37f-e9cf9471e1ad',
  date: 'Thu, 09 Nov 2017 13:11:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/CNAME/set-cname?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"cdcba354-d866-4582-973f-f38a16dc5bc0\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: 'cdcba354-d866-4582-973f-f38a16dc5bc0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '06f7615d-bb38-486b-9ad9-ba83dca2efae',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7994e1b3-b71e-4734-a37f-e9cf9471e1ad',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131149Z:7994e1b3-b71e-4734-a37f-e9cf9471e1ad',
  date: 'Thu, 09 Nov 2017 13:11:48 GMT',
  connection: 'close' });
 return result; }]];