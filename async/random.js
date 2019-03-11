var crypto = require("crypto");

if (crypto.randomFill) {
  module.exports = function(bytes) {
    return new Promise(function(resolve, reject) {
      // 基于crypto随机算法填充bytes空间
      crypto.randomFill(Buffer.allocUnsafe(bytes), function(err, buf) {
        if (err) {
          reject(err);
        } else {
          resolve(buf);
        }
      });
    });
  };
} else {
  // 如果提供的crypo模块没有randomFill能力，则使用crypto.randomBytes函数
  module.exports = function(bytes) {
    return new Promise(function(resolve, reject) {
      crypto.randomBytes(bytes, function(err, buf) {
        if (err) {
          reject(err);
        } else {
          resolve(buf);
        }
      });
    });
  };
}
