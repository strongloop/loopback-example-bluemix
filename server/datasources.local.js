// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-example-bluemix

'use strict';
if (process.env.VCAP_SERVICES) {
  module.exports = {};
} else {
  // Mock up cloudantNoSQLDB for non-Bluemix env
  module.exports = {
    cloudantNoSQLDB: {
      name: 'cloudantNoSQLDB',
      connector: 'memory',
    },
  };
}
