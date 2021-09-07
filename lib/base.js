/**
 * @description: 验证是否为undefined | null
 * @param {any} value
 * @return {*}
 */
export var isDef = function (value) {
    return value !== undefined && value !== null;
};
export function isObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * @description: 过滤掉对象的undefined | null
 * @param {*} obj
 * @return {*}
 */
export var mapIsDefObject = function (obj) {
    if (!isDef(obj) || !isObject(obj))
        return obj;
    var mapObj = {};
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = obj[key];
        if (!isDef(value))
            continue;
        mapObj[key] = value;
    }
    return mapObj;
};
/**
 * @description: 获取文件类型 text.png -> png
 * @param {string} filename
 * @return {string}
 */
export var getExtension = function (filename) {
    var pointLast = filename.lastIndexOf(".");
    if (pointLast && pointLast < filename.length - 1)
        return filename.slice(pointLast + 1);
    return "";
};
