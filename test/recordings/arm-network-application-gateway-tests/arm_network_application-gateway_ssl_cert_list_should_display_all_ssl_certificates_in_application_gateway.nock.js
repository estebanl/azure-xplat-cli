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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"xplatTestAppGw\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\r\n  \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"10ac3772-8011-4fdb-a06b-70b2b6f6ea15\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Small\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [\r\n      {\r\n        \"name\": \"cert01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQD\",\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"cert02\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert02\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIFAzCCAuugAwIBAgIQXqL5xfwWNYpARTuvh9k1HzANBgkqhkiG9w0BAQ0FADARMQ8wDQYDVQQDEwZDQVJvb3QwHhcNMTYwOTE2MDc0OTUzWhcNMzkxMjMxMjM1OTU5WjARMQ8wDQYDVQQDEwZDQVJvb3QwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCqcpAdi82WTQK7H0in1yqWnJD9I+TCd7dFjz75eWGFykkBU2lgcFXBJ3xb//LNrO6FaVASw9fEOGs8HE3PQosmIznpb33ZVuHxDPWyWK3bBFQJtnrXxyHZEwJV21RSnShAXLEXH/Ip1J96u6SPpkz5Rn1Xad7NtefIo35ceucS5Nc0k9m+si58ONriJGWFrTpDLPuFeRCKkbeHEMkz/uo+OHcIqp+XaaamVzDRv6e7pnbwgNChdc94sIqLEBcVzPaPBi3Kd4lUZUU5c69H4GLSEEhZd3ZyXDofjl6LAiIkWL9m4LZP7S3VAt2b9otG1/6k6w6Suxn9gZSRr5VCvyFo8JWP5VVU/CghXiEaYP20pNVtuDj9ty9HKnsQtrF3jAjASPB5+AXj5zwP0R4mB9VSV505rw3NHIpBAdH0erUECgNCflyz3An2GUIF0DZPJnpNnTqFRDBmb6Ub99rcoT7We/h/pJg99jHYHdvXqb+78PiptgCAhz3vXmD0vnW+aaG2HJrSXQQDPDmX+t4TIUkRjIDOsry/Bsyr5e3aVQOjVNIT210WIZjM5U3Y3wWHmvKEr3quMF6IgyJ+uvEUoP+gLkhpEArvuRb+ntkMNTrHx7iCL7OFCon7G1vdCohO02H73yzsD+jneWLBXHujMlodOOEGuU4813Ht2ApnB5joSwIDAQABo1cwVTAPBgNVHRMBAf8EBTADAQH/MEIGA1UdAQQ7MDmAEOp5y9LRyafqWohrlX+z+c2hEzARMQ8wDQYDVQQDEwZDQVJvb3SCEF6i+cX8FjWKQEU7r4fZNR8wDQYJKoZIhvcNAQENBQADggIBAEVvLAdXtjhesPGGm8PmQTn0jXuXdZWHivG1N5K8kL9vjNo7h9voKpwmjHaPNrlr4bzff9BivvlAUyP8NL3xwgNqv+7R0ONx1h+nF6J0BCEY0WKjeLHu/IlNWqtgi1eF3XyemD/MDrr6gRylOQuvLKHvGZXOPjodLDAV52cKqsYY95dbWPKrbRQmNuXbVTLRwkf2asy4fTGZjYWBoJushSNeLR9ulikzUEfdR4GsXj/rb/N6E9/DR1/xlDJEV0ZU9o7/FC84IGG4t8sFjnOay71ee6Tq7R3YMvlRSQrbJ0ryF/3Zxu2B6DaUP4JdNBMRv5HzqlEVqfkcG97ZjYKLuDfyZDgCWdcI3+1lCMahKMk/xj/hKHn3/eI2x5PcgBc38RRX64n7CFEv3kmNQ+jZU3QP9r48MEWA+0eKjSVjW6v/37LBY94VKMUyQdCNNLoyDAzMRbNANOKoBkuWnm9uz89HdRlgkinGTOmb08fOqpwqDL5A5JwdG89rkWG2/7x/cHgRBfDZFlz2Kjve6/0kQN25QhGb0Fr6Rhknu1go8qToCOHxbD1B62+Fxh91Y4jEmtVUMuTaLEhdrvH7GKfiFEyaNaDxJFXS5BG5dM3FJ5WJXc7jF/D25vGPUDiKCuZWUUWz66wKhMtaQAhuyX3lz4ICQRsuAub4W1MWrIfDt4hu\"\r\n        }\r\n      }\r\n    ],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.6\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"testFrontendIp\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/testFrontendIp\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/publicIPAddresses/xplatTestPublicIp\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 112,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestPoolName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/xplatTestPoolName\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 555\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.1.1.1\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 111,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Https\",\r\n          \"sslCertificate\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\"\r\n          },\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"0b338dd9-c1be-4d2e-abda-2a531f117cd3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12657',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0b338dd9-c1be-4d2e-abda-2a531f117cd3"',
  'x-ms-request-id': '95959310-578d-4907-95a6-e06303cd116e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '08dc01f8-9b75-43f3-82ea-cf11f25fe2e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160919T114903Z:08dc01f8-9b75-43f3-82ea-cf11f25fe2e7',
  date: 'Mon, 19 Sep 2016 11:49:02 GMT' });
 return result; }]];