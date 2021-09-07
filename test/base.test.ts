/*
 * @Description: 测试base
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-22 19:39:40
 * @LastEditTime: 2021-08-22 19:50:21
 */
const { isDef } = require("../main");

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
