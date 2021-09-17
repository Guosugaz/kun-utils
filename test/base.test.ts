/*
 * @Description: 测试base
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-22 19:39:40
 * @LastEditTime: 2021-09-07 23:19:55
 */
const { isDef, mapToDefObject, isObject } = require("../main");

describe("test isDef", () => {
  test("测试undefined或者null", () => {
    expect(isDef(undefined)).toBe(false);
    expect(isDef(null)).toBe(false);
  });

  test("测试真值", () => {
    expect(isDef(1)).toBe(true);
    expect(isDef("test")).toBe(true);
    expect(isDef({ test: "yes" })).toBe(true);
    expect(isDef(["test"])).toBe(true);
    expect(isDef(() => "test")).toBe(true);
  });
});

describe("test isObject", () => {
  test("测试isObject", () => {
    expect(isObject(undefined)).toBe(false);
    expect(isObject(12)).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject({})).toBe(true);
  });
});

describe("test mapToDefObject", () => {
  test("是否过滤出无undefined和null的对象", () => {
    expect(
      mapToDefObject({
        a: undefined,
        b: null,
        c: "test",
        d: 1,
        e: [1, "sd"]
      })
    ).toEqual({
      c: "test",
      d: 1,
      e: [1, "sd"]
    });
  });
});
