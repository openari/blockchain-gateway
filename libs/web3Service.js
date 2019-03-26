const Tx = require('ethereumjs-tx');
let Web3 = require('web3');
const Wallet = require('ethereumjs-wallet');
let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(process.env.ETHEREUM_PROVIDER));

class Web3Service {
  async sendSignedTransaction(payload) {
    try {
      const {gasPrice, data} = payload;

      const privateKey = new Buffer(process.env.ETHEREUM_PRIVATE_KEY, 'hex')
      const customGasPrice = gasPrice || "21"; 

      const wallet = Wallet.fromPrivateKey(privateKey);

      const rawTx = {
        nonce: '0x' + web3.eth.getTransactionCount(wallet.getAddressString()).toString(16),
        gasPrice: web3.toHex(web3.toWei(customGasPrice, "shannon")), 
        from: wallet.getAddressString(),
        to: process.env.TO_ADDRESS || '0x0000000000000000000000000000000000000000',
        value: '0x00',
        data: web3.toHex(data)
      }
      console.log('rawTx: ', rawTx);
      const estimateGas = await web3.eth.estimateGas(rawTx);
      rawTx.gasLimit = web3.toHex(estimateGas);
      
      const tx = new Tx(rawTx);
      tx.sign(privateKey);

      const serializedTx = tx.serialize();
      let transactionHash = await web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'));
      return transactionHash;
    } catch (err) {
      console.log(err);
    }
  }

  getBlockNumber() {
    try {
      const blockNumber = web3.eth.blockNumber;
      return blockNumber
    } catch (err) {
      console.log(err);
    }
  }

  getNetwork() {
    try {
      const network = web3.version.network;
      return network;
    } catch (err) {
      console.log(err);
    }
  }

  async getTransactionReceipt(txhash) {
    try {
      const receipt = await web3.eth.getTransactionReceipt(txhash);
      return receipt;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new Web3Service();
