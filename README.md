# Fabric Snackbar

Example Hyperledger Service 

Base on [Hyperledger Fabric-SDK-Node Example: Balance Transfer](https://github.com/hyperledger/fabric-sdk-node/tree/master/examples/balance-transfer)

And Optimize folder structure.

## Background Scenes

## Features & RoadMap 



## Usage

### Pre-Requirement
- node < 7.0
- docker
- docker-compose


### Installation
```bash
npm install
```

### Start

#### Start Fabric Network
```bash
cd src/artifacts
docker-compose  up
```

#### Start Fabric Snackbar Service

Now return to project root folder.

```bash
npm start
```


#### Verify

```bash
curl -s -X POST http://localhost:5000/users -H "cache-control: no-cache" -H "content-type: application/x-www-form-urlencoded" -d 'username=Jim&organization=little-factory.com'
```
