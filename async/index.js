var random = require("./random");
var url = require("../url");

// 整个随机ID生成算法的核心包含采用什么随机算法，以及符合要求的字典
module.exports = function(size) {
  size = size || 21;
  return random(size).then(function(bytes) {
    var id = "";
    while (0 < size--) {
      id += url[bytes[size] & 63];
    }
    return id;
  });
};
