/**
 * @description: 保留数字的后几位数，默认两位
 * @param {number | string} value
 * @param {number} fix 保留后位数
 * @param {boolean} toString 返回值的类型是否为字符串
 * @return {number | string}
 */
declare function numToFix(value: number, fix?: number, toString?: true): string;
declare function numToFix(value: string, fix?: number, toString?: false): number;
export declare const toThousands: (num: number) => string;
export { numToFix };
