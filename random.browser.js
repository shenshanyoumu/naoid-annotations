// 在浏览器环境下，W3C制定了crypto规范；当然针对微软体系有另外的规范
var crypto = self.crypto || self.msCrypto;

module.exports = function(bytes) {
  return crypto.getRandomValues(new Uint8Array(bytes));
};
