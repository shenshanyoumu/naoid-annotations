var crypto = self.crypto || self.msCrypto;

// crypto模块在浏览端的支持
module.exports = function(bytes) {
  // 注意下面crypto.getRandomValues是W3C对crypto的规范，在Node环境并不支持该函数
  return Promise.resolve(crypto.getRandomValues(new Uint8Array(bytes)));
};
