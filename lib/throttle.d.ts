/**
 * @description: 节流throttle代码（时间戳+定时器）
 * @param {Function} func 回调函数
 * @param {number} delay 延迟时间
 * @param {boolean} init 是否在第一次立刻执行
 * @return {Function}
 */
export declare const throttle: (func: Function, delay: number, init: boolean) => Function;
