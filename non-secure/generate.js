// 基于Math.random()生成随机数实际上是不安全的，因为JS内置的随机数生成函数并非完全均匀分布
module.exports = function(alphabet, size) {
  size = size || 21;
  var id = "";
  while (0 < size--) {
    id += alphabet[(Math.random() * alphabet.length) | 0];
  }
  return id;
};
