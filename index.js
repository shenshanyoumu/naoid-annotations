// 基于Node的内建模块crypto模块或者浏览器端的Crypto API来生成随机字符串
var random = require("./random");

// 相当于字典字符串，用于随机选择其中的字符来构成ID
var url = require("./url");

/**
 * 生成安全且URL友好的ID字符串
 *
 * By default, ID will have 21 symbols to have a collision probability similar
 * to UUID v4.
 *
 * @param {number} [size=21] The number of symbols in ID.
 *
 * @return {string} Random string.
 *
 * @example
 * const nanoid = require('nanoid')
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 *
 * @name nanoid
 * @function
 */
module.exports = function(size) {
  // Nano默认采用21个字符来实现与UUID v4版本类似的ID冲突概率
  size = size || 21;
  var bytes = random(size);
  var id = "";

  // 从字典中根据随机索引得到最终的ID字符串，注意下面与63的与运算用于约束数组访问的边界
  while (0 < size--) {
    id += url[bytes[size] & 63];
  }
  return id;
};
