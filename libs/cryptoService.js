const CryptoJS = require('crypto-js');

class CryptoService {

  encrypt(text) {
    var ciphertext = CryptoJS.AES.encrypt(text, process.env.API_SECRET_KEY);
    return ciphertext.toString();
  }

  decrypt(ciphertext) {
    var bytes = CryptoJS.AES.decrypt(ciphertext, process.env.API_SECRET_KEY)
    var plaintext = bytes.toString(CryptoJS.enc.Utf8)
    return plaintext;
  }

}

module.exports = new CryptoService();
