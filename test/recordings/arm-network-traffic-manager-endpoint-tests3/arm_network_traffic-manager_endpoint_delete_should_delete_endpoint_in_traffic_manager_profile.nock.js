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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-endpoint\",\"name\":\"test-endpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"test-profile-dns.azure.com\",\"weight\":100,\"priority\":200,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '489',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c3e83240-bc53-45ca-95a8-45e610080e8d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '0b2b6b82-3a32-4699-b595-00b8d9432c72',
  'x-ms-routing-request-id': 'CANADAEAST:20170322T212137Z:0b2b6b82-3a32-4699-b595-00b8d9432c72',
  date: 'Wed, 22 Mar 2017 21:21:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-endpoint\",\"name\":\"test-endpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"test-profile-dns.azure.com\",\"weight\":100,\"priority\":200,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '489',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c3e83240-bc53-45ca-95a8-45e610080e8d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '0b2b6b82-3a32-4699-b595-00b8d9432c72',
  'x-ms-routing-request-id': 'CANADAEAST:20170322T212137Z:0b2b6b82-3a32-4699-b595-00b8d9432c72',
  date: 'Wed, 22 Mar 2017 21:21:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4f293d90-356e-41e2-b9ca-6e6e4d8a92d4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '35d52b5b-0193-4d52-bbca-45bcb74e82d8',
  'x-ms-routing-request-id': 'CANADAEAST:20170322T212139Z:35d52b5b-0193-4d52-bbca-45bcb74e82d8',
  date: 'Wed, 22 Mar 2017 21:21:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4f293d90-356e-41e2-b9ca-6e6e4d8a92d4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '35d52b5b-0193-4d52-bbca-45bcb74e82d8',
  'x-ms-routing-request-id': 'CANADAEAST:20170322T212139Z:35d52b5b-0193-4d52-bbca-45bcb74e82d8',
  date: 'Wed, 22 Mar 2017 21:21:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'test-endpoint' of type 'externalendpoints' does not exist in the profile 'test-profile'.\"}", { 'cache-control': 'private',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '91c07655-2049-4576-8331-48d758e5a0f5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'b91e1ee1-50d8-4244-a9d4-544d04152729',
  'x-ms-routing-request-id': 'CANADAEAST:20170322T212141Z:b91e1ee1-50d8-4244-a9d4-544d04152729',
  date: 'Wed, 22 Mar 2017 21:21:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'test-endpoint' of type 'externalendpoints' does not exist in the profile 'test-profile'.\"}", { 'cache-control': 'private',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '91c07655-2049-4576-8331-48d758e5a0f5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'b91e1ee1-50d8-4244-a9d4-544d04152729',
  'x-ms-routing-request-id': 'CANADAEAST:20170322T212141Z:b91e1ee1-50d8-4244-a9d4-544d04152729',
  date: 'Wed, 22 Mar 2017 21:21:40 GMT',
  connection: 'close' });
 return result; }]];