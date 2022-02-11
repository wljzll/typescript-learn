// ts中的数据类型

// 一、 基础类型：
/**
 * 1) 数字类型(number).
 * 2) 字符串类型(string).
 * 3) 布尔类型(boolean).
 * 4) 元素类型.
 * 5) 数组类型.
 * 6) 枚举类型.
 * 7) any类型(any).
 * 8) null类型(null).
 * 9) undefined类型(undefined).
 * 10) never类型(never).
 * 11) ts文档中没怎么提及的两种类型: symbol类型(symbol)和bigint类型(bigint).
 * 12) Object类型(object)(非原始数据类型)
 */
// 所有的类型 : 后面的都是类型 = 后面的都是值

// 1.数字类型
let num: number = 10;

// 2.字符串类型
let str: string = "zf";

// 3.布尔类型
let bool: boolean = true;

// 4.元组类型：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
/**
 * 操作元组的注意事项：
 * 1) 可以向元组中添加内容，但是添加的内容必须是元组中已经声明过的类型。
 * 2) 不能通过索引添加内容。
 */
let tuple: [string, number, boolean] = ["zf", 11, true];
let t = tuple.unshift(true);
// tuple[0] = 'zfpx';

// console.log(tuple[0]);

// 5.数组类型：存放一类类型的集合
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["a", "b"];
// 联合类型可以看作并集 既能使用数字 又能使用字符串
let arr3: (number | string)[] = [1, "2"];
let arr4: Array<number | string> = [1, 2, 3, "a"];
let arr5: any[] = [1, 2, {}]; // 什么都能放

// 6.枚举类型
enum USER_ROLE {
  USER, // 默认下标是从0开始
  ADMIN,
  MANAGER,
}
// 默认可以正向取出 也可以反举
// 通过下标去取是反举
console.log(USER_ROLE[0]);
console.log(USER_ROLE.USER);
console.log(USER_ROLE["USER"]);

// 6.1 异构枚举：异构枚举不能反举，但是可以通过数字自动向下推断
enum USER_ROLE2 {
  USER = "a",
  ADMIN = 1,
  MANAGER,
}
// console.log(USER_ROLE2.USER);
// console.log(USER_ROLE2['a']); // 报错 异构枚举不能反举

// 6.2 常量枚举：只是提供一个类型，也不能反举
const enum USER_ROLE3 {
  USER,
  ADMIN,
}
console.log(USER_ROLE3.USER); // 打包成一个常量 数字 0

// 7.any类型：不进行类型检测的类型 相当于没有写类型
let arr: any = [1, "zf", {}, []]; // 能不用any 尽量不用any
console.log(arr);

// 8. null和undefined类型：null和undefined是任何类型的子类型
let str2: number | string;
// str2 = undefined; // 默认在严格模式下，只能将null赋值给null类型，undefined赋值给undefined类型
// str2 = null;
let n: null;
n = null;
let u: undefined;
u = undefined;

// 8.void 空类型 只能接受 null 和 undefined 一般的应用场景就是函数的返回值
let v: void;
// v = null; // 报错 在非严格模式下不报错
v = undefined; // undefined默认兼容void

// function a():void {
//     return null; // 报错
// }
function a(): void {
  return undefined; // 报错
}

// 9. never类型：永远不，是任何类型的子类型，可以把never赋予给任何类型
/**
 * 永远达不到的情况有三种
 * 1) 错误。
 * 2) 死循环。
 * 3) 类型判断时出现never。
 */
// 错误
function MyError(): never {
  throw new Error("");
}
// let nr1 = MyError(); // nr的类型就是 never
// str = nr1; // 这个时候 nr作为never就可以赋值给任何类型

// 死循环
function whileTrue(): never {
  while (true) {}
}

let nr2 = whileTrue(); // nr的类型就是 never
str = nr2; // 这个时候 nr作为never就可以赋值给任何类型

// 类型判断
function byType(val: string | number) {
  if (typeof val == "string") {
    val;
  } else if (typeof val == "number") {
    val;
  } else {
    val; // never
  }
}

// 10.symbol类型： symbol表示独一无二
let s1 = Symbol("123");
let s2 = Symbol("123");

// 11.bigint类型：

let num1 = Number.MAX_SAFE_INTEGER + 1;
let num2 = Number.MAX_SAFE_INTEGER + 2;
console.log(num1 == num2);

let num3 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
let num4 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(2);
console.log(num3 == num4);

// 非原始数据类型:
// 12.对象类型 非原始数据类型 object

const create = (obj: object) => {};
// create(1); // 报错
create({});
create([]);
create(function () {});

let name = "1"; // 默认去安居下本来就有一个name
console.log(name);

/**
 * 总结：
 * 如果不算上symbol和bigint类型，ts的基本数据类型有11种，其中object类型属于非原始数据类型，其他10种属于原始数据类型
 */

export {}; // 防止模块间的干扰
