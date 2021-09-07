/*
 * @Description: 格式化数字
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 15:26:16
 * @LastEditTime: 2021-08-22 19:31:53
 */
import { isDef } from "../base";
/**
 * @description: 保留数字的后几位数，默认两位
 * @param {number | string} value
 * @param {number} fix 保留后位数
 * @return {number}
 */
export var numToFix = function (value, fix) {
    if (fix === void 0) { fix = 2; }
    var zero = (0).toFixed(fix);
    if (!isDef(value))
        return zero;
    if (typeof value === "string") {
        value = Number(value);
    }
    value = Number(value.toFixed(fix));
    return isNaN(value) ? zero : value;
};
