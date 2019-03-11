var url = "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz";

// url表示字典，size表示生成的随机ID的字符长度
module.exports = function(size) {
  size = size || 21;
  var id = "";
  while (0 < size--) {
    id += url[(Math.random() * 64) | 0];
  }
  return id;
};
