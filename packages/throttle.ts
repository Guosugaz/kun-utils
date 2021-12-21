import { isDef } from "./base";

/**
 * @description: 节流throttle代码（时间戳+定时器）
 * @param {Function} func 回调函数
 * @param {number} delay 延迟时间
 * @param {boolean} init 是否在第一次立刻执行
 * @return {Function}
 */
export const throttle = (func: Function, delay: number, init: boolean): Function => {
  let timer: number | null = null;
  let startTime = Date.now();
  let hasInit: boolean | null = init;
  return function (this: any) {
    const curTime = Date.now();
    const remaining = delay - (curTime - startTime);
    const context = this;
    const args = arguments;
    if (isDef(hasInit)) {
      func.apply(context, args);
      hasInit = null;
    }
    if (timer) clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
};
