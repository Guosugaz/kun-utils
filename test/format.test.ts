/*
 * @Description: 测试format
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 19:06:14
 * @LastEditTime: 2021-09-18 10:55:35
 */
import { 
  parseTime,
  formatTime,
  getMonthStartAndEnd,
  numToFix,
  toThousands
 } from "../packages/index";

describe("test parseTime", () => {
  const time = 1627816169200;
  const date = new Date(time);

  test("test typeof time is number", () => {
    expect(parseTime(time)).toBe("2021-08-01 19:09:29");
  });

  test("test typeof time is Date", () => {
    expect(parseTime(date)).toBe("2021-08-01 19:09:29");
  });

  test("test typeof time is string", () => {
    expect(parseTime("" + time)).toBe("2021-08-01 19:09:29");
  });

  test("test format {y}-{m}-{d}", () => {
    expect(parseTime("" + time, "{y}-{m}-{d}")).toBe("2021-08-01");
  });
});

describe("test formatTime", () => {
  test("测试输出 刚刚", () => {
    const time = new Date().getTime();
    expect(formatTime(time)).toBe("刚刚");
  });

  test("测试输出 2分钟", () => {
    const time = new Date().getTime() - 2 * 60 * 1000;
    expect(formatTime(time)).toBe("2分钟前");
  });

  test("测试输出 2小时", () => {
    const time = new Date().getTime() - 2 * 3600 * 1000;
    expect(formatTime("" + time)).toBe("2小时前");
  });

  test("测试输出 1天前", () => {
    const time = new Date().getTime() - 1 * 24 * 3600 * 1000;
    expect(formatTime("" + time)).toBe("1天前");
  });
});

describe("test clearCountFloat", () => {
  test("测试多位的浮点", () => {
    expect(numToFix(0.1234)).toBe(0.12);
  });

  test("测试多位的浮点, 且四舍五入", () => {
    expect(numToFix(0.12999)).toBe(0.13);
  });

  test("测试整数", () => {
    expect(numToFix(100)).toBe(100);
  });
  test("测试字符串的数字", () => {
    expect(numToFix("123.234")).toBe(123.23);
  });
  test("测试保留后一位", () => {
    expect(numToFix("123.234", 1)).toBe(123.2);
  });
  test("测试不保留", () => {
    expect(numToFix("123.234", 0)).toBe(123);
  });
});

describe("test getMonthStartAndEnd", () => {
  test("测试获取当前月的开始和结束", () => {
    const date = new Date();
    const y = parseTime(date, "{y}");
    const m = parseTime(date, "{m}");
    const lastMonth = new Date(Number(y), Number(m), 0).getDate();
    expect({
      start: `${y}-${m}-01`,
      end: `${y}-${m}-${lastMonth}`
    }).toEqual(getMonthStartAndEnd());
  });
});

describe("test toThousands", () => {
  test("测试1个千位", () => {
    expect(toThousands(1000)).toBe("1,000");
  });
  test("测试2个千位", () => {
    expect(toThousands(1000000)).toBe("1,000,000");
  });
  test("测试3个千位", () => {
    expect(toThousands(1000000000)).toBe("1,000,000,000");
  });
  test("测试1个千位(带小数)", () => {
    expect(toThousands(1000.01)).toBe("1,000.01");
    expect(toThousands(1000.32)).toBe("1,000.32");
  });
  test("测试2个千位(带小数)", () => {
    expect(toThousands(1000000.01)).toBe("1,000,000.01");
    expect(toThousands(1000000.32)).toBe("1,000,000.32");
  });
});
