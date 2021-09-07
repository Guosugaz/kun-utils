/*
 * @Description:
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 15:16:04
 * @LastEditTime: 2021-08-01 17:19:44
 */
type FilterKeys<T, U> = {
  [key in keyof T]: T[key] extends U ? never : key;
}[keyof T];

type Fix<T, U> = Pick<T, FilterKeys<T, U>>;

/**
 * @description: 验证是否为undefined | null
 * @param {any} value
 * @return {*}
 */
export const isDef = <T>(value: T): value is NonNullable<T> => {
  return value !== undefined && value !== null;
};

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === "object";
}

/**
 * @description: 过滤掉对象的undefined | null
 * @param {*} obj
 * @return {*}
 */
export const mapIsDefObject = <T = any>(obj: T): Fix<T, undefined | null> => {
  if (!isDef(obj) || !isObject(obj)) return obj;
  const mapObj: any = {};
  for (let key of Object.keys(obj)) {
    const value = (obj as any)[key];
    if (!isDef(value)) continue;
    mapObj[key] = value;
  }
  return mapObj;
};

/**
 * @description: 获取文件类型 text.png -> png
 * @param {string} filename
 * @return {string}
 */
export const getExtension = function (filename: string): string {
  const pointLast = filename.lastIndexOf(".");
  if (pointLast && pointLast < filename.length - 1)
    return filename.slice(pointLast + 1);
  return "";
};