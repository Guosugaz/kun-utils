/**
 * @description 转化时间格式 Date | "1548221490638" ->  {y}-{m}-{d} {h}:{i}:{s}
 * @param {(Date|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export declare function parseTime(time: Date | string | number, cFormat?: string): string;
/**
 * @description 格式化时间 传入时间戳 -> xx分钟前 | {y}-{m}-{d} {h}:{i}:{s}
 * @param {number} time 时间戳
 * @param {string} option 格式化类型 {y}-{m}-{d} {h}:{i}:{s}
 * @returns {string}
 */
export declare function formatTime(time: number | string, option?: string): string;
/**
 * @description: 获取当月的开始和结束日期 格式 {y}-{m}-{d}
 * @return {{start: string, end: string}}
 */
export declare function getMonthStartAndEnd(): {
    start: string;
    end: string;
};
