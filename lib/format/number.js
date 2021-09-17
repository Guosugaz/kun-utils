/*
 * @Description: 格式化数字
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 15:26:16
 * @LastEditTime: 2021-09-17 23:41:33
 */
import { isDef } from "../base";
function numToFix(value, fix, toString) {
    if (fix === void 0) { fix = 2; }
    if (toString === void 0) { toString = false; }
    var zero = (0).toFixed(fix);
    if (!isDef(value))
        return zero;
    if (typeof value === "string") {
        value = Number(value);
    }
    value = Number(value.toFixed(fix));
    if (isNaN(value))
        return zero;
    return toString ? value.toFixed(2) : value;
}
// 格式化数据千位数加逗号
export var toThousands = function (num) {
    var str = (num || 0).toString();
    var reg = /\.\d+/;
    var temp = str.replace(reg, "").replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
    var match = str.match(reg);
    var ext = "";
    if (match && match.length)
        ext = match[0];
    return ext ? temp + ext : temp;
};
export { numToFix };
