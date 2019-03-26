const cryptoService = require('../libs/cryptoService.js');

describe('crypto test', () => {
  it('encrypt & decrypt', () => {
    try {
      const content = '{"identification":{"art_id":641,"ari":"https://project.org.tw/dar/art/641","applicant_id":90,"applicant":"空總臺灣當代文化實驗場c-lab","email":"someone@somewhere.com","phone":"+886212345678","type_of_object":"油畫","materials":"壓克力","techniques":"油畫","measurements":"高: 100cm, 寬: 100cm","inscriptions_and_markings":"","distinguishing_features":"","title":"旋轉星形密碼—當代藝術鏈結交流區塊的價值回朔實驗","subject":"神話學知識新類型","date_or_period":"三月 2019","maker":"創作者名稱","brief":"本作品為資源識別碼系統之實驗計畫，透過ARI可以做到作品在區塊鏈上的資料永久存取，也可以讓不同角色透過ARI來做藝文研究、作品展覽等多元應用，並作為後續銜接虛擬貨幣交易系統之基礎。","attachments":[{"url":"https://host.com/attachments/0001.ai","hash":"b751850b1a57168a5693cd924b6b096e08f621827444f70d884f5d0240d2712e10e116e9192af3c91a7ec57647e3934057340b4cf408d5a56592f8274eec53f0"}]},"ownership":{"owner":"創作者","email":"owner@somewhere.com","phone":"+886212345678","price":"N/A","attachments":[]}}';
      const encryptResult = cryptoService.encrypt(process.env.API_SECRET_SALT + content);
      console.log(encryptResult);
      const decryptResult = cryptoService.decrypt(encryptResult);
      expect(process.env.API_SECRET_SALT + content).toEqual(decryptResult);
    } catch (err) {
      console.log(err);
    }
  });
});