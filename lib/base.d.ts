declare type FilterKeys<T, U> = {
    [key in keyof T]: T[key] extends U ? never : key;
}[keyof T];
declare type Fix<T, U> = Pick<T, FilterKeys<T, U>>;
/**
 * @description: 验证是否为undefined | null
 * @param {any} value
 * @return {boolean}
 */
export declare const isDef: <T = any>(value: T) => value is NonNullable<T>;
/**
 * @description: 判断传入的值是否为对象
 * @param {unknown} val
 * @return {boolean}
 */
export declare function isObject(val: unknown): val is Record<any, any>;
/**
 * @description: 过滤掉对象的undefined | null
 * @param {Object} obj
 * @return {Object}
 */
export declare const mapToDefObject: <T = any>(obj: T) => Fix<T, null | undefined>;
/**
 * @description: 获取文件类型 text.png -> png
 * @param {string} filename
 * @return {string}
 */
export declare const getExtension: (filename: string) => string;
export {};
