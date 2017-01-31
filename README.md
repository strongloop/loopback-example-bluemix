# loopback-example-bluemix

This is a sample application to demonstrate LoopBack integration with Bluemix as part of Cloud Native Developer Experience initiative.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/strongloop/loopback-example-bluemix)

# Integration points

## Data Sources from Bluemix services

- Cloudant
- DashDB
- Databases from Compose
- Object storage

## Connectors for Bluemix services

- Messaging
- Watson APIs
- ...

## Authentication with Bluemix

## Integration with OpenWhisk

## Delivery Pipeline

## Monitoring

## API Connect

- API management
- oAuth 2.0 auth

# Extension to loopback-cli

## Generate manifest files for Bluemix

- [manifest.yml](https://console.ng.bluemix.net/docs/manageapps/depapps.html#appmanifest):
```yaml
applications:
- path: .
  memory: 512M
  instances: 1
  domain: mybluemix.net
  name: loopback-example-bluemix
  host: loopback-example-bluemix
  disk_quota: 1024M
```

- .bluemix/pipeline.yaml


## Provision Bluemix services
## Publish to Bluemix

# References

- https://console.ng.bluemix.net/docs/manageapps/mngapps.html#manageapps
- https://github.com/ibm-bluemix-mobile-services/bluemix-generator
- https://github.com/Puquios/hello-containers
