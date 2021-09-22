### @sugaz/utils 介绍

---

### 1. 安装

```bash
npm install --save @sugaz/utils
```

### 2. 介绍

**_isDef:_** 判断传入的值是否为真值

<code>isDef<T = any>(value: T): value is NonNullable<T></code>

```ts
import { isDef } from "@sugaz/utils";

isDef(123);
// => true
isDef(null);
// => false
```

**_isObject:_** 判断传入的值是否为对象

<code>isObject(val: unknown): val is Record<any, any></code>

```ts
import { isObject } from "@sugaz/utils";

isObject({ test: 123 });
// => true
isObject(123);
// => false
```

**_isObject:_** 过滤掉对象中的 undefined | null，浅拷贝

<code>mapToDefObject<T = any>(obj: T): Fix<T, undefined | null></code>

```ts
import { mapToDefObject } from "@sugaz/utils";

mapToDefObject({ test: 123, a: undefined, b: null, e: [1, "sd"] });
// => {test: 123, e: [1, "sd"]}
```

**_getExtension:_** 获取文件的类型

<code>getExtension(filename: string): string</code>

```ts
import { getExtension } from "@sugaz/utils";

getExtension("asd.cvxv.jpeg");
// => jpeg
```

**_parseTime:_** 转化时间格式 Date | "1548221490638" -> {y}-{m}-{d} {h}:{i}:{s}

<code>parseTime(time: Date | string | number, cFormat?: string): string</code>

```ts
import { parseTime } from "@sugaz/utils";

parseTime(1627816169200);
// => 2021-08-01 19:09:29
```

**_formatTime:_** 格式化时间 传入时间戳 -> xx 分钟前 | {y}-{m}-{d} {h}:{i}:{s}

<code>formatTime(time: number | string, option?: string): string</code>

```ts
import { formatTime } from "@sugaz/utils";

const time1 = new Date().getTime();
const time2 = new Date().getTime() - 2 * 60 * 1000;

formatTime(time1);
// => 刚刚

formatTime(time2);
// => 2分钟前
```

**_getMonthStartAndEnd:_** 获取当月的开始和结束日期 格式 {y}-{m}-{d}

<code>getMonthStartAndEnd(): { start: string; end: string }</code>

```ts
import { getMonthStartAndEnd } from "@sugaz/utils";

getMonthStartAndEnd();
```

**_numToFix:_** 保留数字的后几位数，默认两位

<code>numToFix(value: number | string, fix = number, toString: string): string | nulber</code>

```ts
import { numToFix } from "@sugaz/utils";

numToFix(0.1234);
// => 0.12
```

**_toThousands:_** 格式化数据千位数加逗号

<code>toThousands(value: number): string</code>

```ts
import { toThousands } from "@sugaz/utils";

numToFix(1000000.01);
// => 1,000,000.01
```
