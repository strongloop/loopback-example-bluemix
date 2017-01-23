var _ = require('lodash');
var services = process.env.VCAP_SERVICES;
if (typeof services === 'string') {
  services = JSON.parse(services);
} else {
  services = [];
}
var dataSources = {};
for (var s in services) {
  var serviceList = services[s];
  for (var i = 0, n = serviceList.length; i < n; i++) {
    var service = serviceList[i];
    if (s.indexOf('postgresql') !== -1) {
      dataSources[s] = _.cloneDeep(service.credentials);
      dataSources[s].url = dataSources[s].uri;
      dataSources[s].connector = 'postgresql';
    }
    if (s.indexOf('cloudant') !== -1) {
      dataSources[s] = _.cloneDeep(service.credentials);
      dataSources[s].database = 'loopback';
      dataSources[s].connector = 'cloudant';
    }
  }
}
console.log(dataSources);
module.exports = dataSources;
