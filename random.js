var crypto = require("crypto");

// 注意crypto在Node环境作为Node内建模块存在，而在Web环境是W3C的一种标准
if (crypto.randomFillSync) {
  // 缓存随机计算结果
  var buffers = {};
  module.exports = function(bytes) {
    var buffer = buffers[bytes];
    if (!buffer) {
      // 分配存储空间
      buffer = Buffer.allocUnsafe(bytes);
      if (bytes <= 255) {
        buffers[bytes] = buffer;
      }
    }
    return crypto.randomFillSync(buffer);
  };
} else {
  module.exports = crypto.randomBytes;
}
