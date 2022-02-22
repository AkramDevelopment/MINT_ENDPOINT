
## Description

This is a simple endpoint that you will be able to call to mint NFT's there is no checks just a simple endpoint that executes a mint 
with the correct paramaters. 


## Enviorment Variables


```.env
WALLET_KEY=CONTRACT_WALLET_PRIVATE
CONTRACT=COLLECTION_ADDRESS
ROYALTY=ROYALTY_RECIEVER
PERCENTAGE=ROYALTY_PERCENTAGE
WSWEB3=INFURA_WEBSOCKET_URL
WEB3=HTTPS_INFURA_URL
ACCOUNT=INURA_ACCOUNT_ADDRESS
NETWORK=ropsten
API_KEY=ALCHEMY_API_KEY
PROD=true/false
```


## Installation

Go into the root of the folder and install all the dependencies.
```bash
#Installs all dependencies
npm install

#Starts the API server to start acccepting mints
node index.js

```

## Endpoints

``` bash

POST /api/v1/mint -> Body: address,tokenID
```
## Contact me

If you have any kind of issues getting this to work feel free to send me a DM on discord Akram | Fantasy Labs#8840
Or join my projects discord channel : https://discord.gg/xqAeEjGQ2H

