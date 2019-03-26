var express = require('express');
var router = express.Router();
const web3Service = require('../libs/web3Service');
const cryptoService = require('../libs/cryptoService');

/**
 * POST ethereum send transaction with data
 */
router.post('/sendTransaction', async (req, res, next) => {
  try {
    if (req.body.data === undefined) {
      res.json({'message': 'missing data'});
    }
    const decryptResult = cryptoService.decrypt(req.body.data);
    if (decryptResult.startsWith(process.env.API_SECRET_SALT)) {
      let data = decryptResult.replace(process.env.API_SECRET_SALT, "");
      const txhash  = await web3Service.sendSignedTransaction({data: data});
      res.json({'message': 'send to ethereum success', 'txhash': txhash});
    } else {
      res.json({'message': 'data format error'});
    }
  } catch (err) {
    console.log('[ERROR] POST /sendTransaction', err);
  }
});

/**
 * GET ethereum network
 */
router.get('/network', async (req, res, next) => {
  try {
    const network = await web3Service.getNetwork();
    res.json({'network': network});
  } catch (err) {
    console.log('[ERROR] GET /network', err);
  }
});

/**
 * GET ethereum transaction receipt
 */
router.get('/receipt', async (req, res, next) => {
  try {
    if (req.query.txhash === undefined) {
      res.json({'message': 'missing txhash'});
    }
    const receipt = await web3Service.getTransactionReceipt(req.query.txhash);
    res.json({'transactionReceipt': receipt});
  } catch (err) {
    console.log('[ERROR] GET /receipt', err);
  }
});

module.exports = router;
