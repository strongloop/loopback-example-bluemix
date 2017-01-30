# loopback-example-bluemix

This is a sample application to demonstrate LoopBack integration with Bluemix as part of Cloud Native Developer Experience initiative.

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

For example, manifest.yml:
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
## Provision Bluemix services
## Publish to Bluemix

# References

- https://github.com/ibm-bluemix-mobile-services/bluemix-generator
