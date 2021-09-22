"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtension = exports.mapToDefObject = exports.isObject = exports.isDef = void 0;
/**
 * @description: 验证是否为undefined | null
 * @param {any} value
 * @return {boolean}
 */
var isDef = function (value) {
    return value !== undefined && value !== null;
};
exports.isDef = isDef;
/**
 * @description: 判断传入的值是否为对象
 * @param {unknown} val
 * @return {boolean}
 */
function isObject(val) {
    return val !== null && typeof val === "object";
}
exports.isObject = isObject;
/**
 * @description: 过滤掉对象的undefined | null
 * @param {Object} obj
 * @return {Object}
 */
var mapToDefObject = function (obj) {
    if (!(0, exports.isDef)(obj) || !isObject(obj))
        return obj;
    var mapObj = {};
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = obj[key];
        if (!(0, exports.isDef)(value))
            continue;
        mapObj[key] = value;
    }
    return mapObj;
};
exports.mapToDefObject = mapToDefObject;
/**
 * @description: 获取文件类型 text.png -> png
 * @param {string} filename
 * @return {string}
 */
var getExtension = function (filename) {
    var pointLast = filename.lastIndexOf(".");
    if (pointLast && pointLast < filename.length - 1)
        return filename.slice(pointLast + 1);
    return "";
};
exports.getExtension = getExtension;
