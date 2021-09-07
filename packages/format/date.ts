/*
 * @Description: 格式化时间
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 14:53:34
 * @LastEditTime: 2021-08-01 17:28:14
 */

/**
 * @description 转化时间格式 Date | "1548221490638" ->  {y}-{m}-{d} {h}:{i}:{s}
 * @param {(Date|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(
  time: Date | string | number,
  cFormat?: string
): string {
  if (arguments.length === 0 || !time) return "";
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date: Date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string") {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), "/");
      }
    }

    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value: number = (formatObj as any)[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    return value.toString().padStart(2, "0");
  });
  return time_str;
}

/**
 * @description 格式化时间 传入时间戳 -> xx分钟前 | {y}-{m}-{d} {h}:{i}:{s}
 * @param {number} time 时间戳
 * @param {string} option 格式化类型 {y}-{m}-{d} {h}:{i}:{s}
 * @returns {string}
 */
export function formatTime(time: number | string, option?: string): string {
  if (("" + time).length === 10) {
    if (typeof time === "string") time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d.getTime()) / 1000;

  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 2) {
    return "1天前";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getMonth() +
      1 +
      "月" +
      d.getDate() +
      "日" +
      d.getHours() +
      "时" +
      d.getMinutes() +
      "分"
    );
  }
}

/**
 * @description: 获取当月的开始和结束日期 格式 {y}-{m}-{d}
 * @return {{start: string, end: string}}
 */
export function getMonthStartAndEnd(): { start: string; end: string } {
  const y = Number(parseTime(new Date(), "{y}"));
  const m = Number(parseTime(new Date(), "{m}"));
  const start = `${y}-${m}-01`;
  const end =
    parseTime(new Date(), "{y}-{m}") + "-" + new Date(y, m, 0).getDate();
  return {
    start,
    end
  };
}
