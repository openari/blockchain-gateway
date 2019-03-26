const web3Service = require('../libs/web3Service.js');
const Web3 = require('web3');
let web3 = new Web3();

describe('web3 test', () => {
  it('get block number', async () => {
    try {
      const result = await web3Service.getBlockNumber();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }, 10000);

  it('get network', async () => {
    try {
      const result = await web3Service.getNetwork();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  });

  it('hex', () => {
    const hex = web3.toHex('hello');
    const ascii = web3.toAscii(hex);
    expect('hello').toEqual(ascii);
  });
});