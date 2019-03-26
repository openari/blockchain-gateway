const request = require('supertest');
const app = require('../app');

describe('routes test', () => {
  it('POST /ethereum/sendTransaction', async () => {
    try {
      const result = await request(app)
      .post('/ethereum/sendTransaction')
      .send({data: 'U2FsdGVkX18/Fdw3ybplWQu4T/s6H3r4zCj+xkxvVCU='})
      .set('Accept', 'application/json')
      .expect(200);

      console.log(result.body);
    } catch (err) {
      console.log(err);
    }
  }, 10000);

  it('GET /ethereum/network', async () => {
    try {
      const result = await request(app)
      .get('/ethereum/network')
      .expect(200, {
        'network': 3
      });
    } catch (err) {
      console.log(err);
    }
  }, 10000);

  it('GET /ethereum/receipt', async () => {
    try {
      const result = await request(app)
      .get('/ethereum/receipt?txhash=0xd1f9c5ceec983eaa86840ea67870b0e030a84c9bf049a2c6dfd45d528fd2d72e')
      .expect(200);

      console.log(result.body);
    } catch (err) {
      console.log(err);
    }
  }, 15000);
});