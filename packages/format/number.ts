/*
 * @Description: 格式化数字
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 15:26:16
 * @LastEditTime: 2021-09-17 23:41:33
 */
import { isDef } from "../base";

/**
 * @description: 保留数字的后几位数，默认两位
 * @param {number | string} value
 * @param {number} fix 保留后位数
 * @param {boolean} toString 返回值的类型是否为字符串
 * @return {number | string}
 */
function numToFix(value: number, fix?: number, toString?: true): string;
function numToFix(value: string, fix?: number, toString?: false): number;
function numToFix(value: number | string, fix = 2, toString = false) {
  const zero = (0).toFixed(fix);
  if (!isDef(value)) return zero;
  if (typeof value === "string") {
    value = Number(value);
  }
  value = Number(value.toFixed(fix));
  if (isNaN(value)) return zero;
  return toString ? value.toFixed(2) : value;
}

// 格式化数据千位数加逗号
export const toThousands = (num: number): string => {
  const str = (num || 0).toString();
  const reg = /\.\d+/;
  const temp = str.replace(reg, "").replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  const match = str.match(reg);
  let ext = "";
  if (match && match.length) ext = match[0];
  return ext ? temp + ext : temp;
};

export { numToFix };
