# Ethereum-express

This project is a middleware of API gateway to Ethereum network.

## Technical Stack
- express: For API server.
- web3.js: The web3.js library is a collection of modules which contain specific functionality for the ethereum ecosystem.
- jest: For test API and libraries.

## Setup Environment

Set all the environment setting in `.env.example`, please clone to `.env` as your local setting.
```
export ETHEREUM_PROVIDER=
export API_SECRET_KEY=
export API_SECRET_SALT=
export ETHEREUM_PRIVATE_KEY=
export TO_ADDRESS=
```

- ETHEREUM_PROVIDER: The provider of Etheruem.
- API_SECRET_KEY: The API secret key to encrypt and decrypt.
- API_SECRET_SALT: The API secret salt to encrypt and decrypt.
- ETHEREUM_PRIVATE_KEY: The private key for sign transaction.
- TO_ADDRESS: Which address is going to write.

## Start Project

#### Run localhost
```
npm start
```

#### Run test
```
npm test
```

## API Documents
Please see [API.md](./API.md)
