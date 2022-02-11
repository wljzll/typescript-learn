// never是其它类型(null undefined)的子类型，代表不会出现的值
// never只是类型，不能作为值使用

// 1.作为不会返回（ return ）的函数的返回值类型

// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function error(message: string): never {
  throw new Error(message);
}

// 由类型推论得到返回值为 never
function fail() {
  return error("Something failed");
}

// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function infiniteLoop(): never {
  while (true) {}
}


// 在 TS 中， null 和 undefined 是任何类型的有效值，所以无法正确地检测它们是否被错误地使用。于是 TS 引入了 --strictNullChecks 这一种检查模式
// 由于引入了 --strictNullChecks ，在这一模式下，null 和 undefined 能被检测到。所以 TS 需要一种新的底部类型（ bottom type ）。所以就引入了 never。
// Compiled with --strictNullChecks
function fn(x: number | string) {
  if (typeof x === "number") {
    // x: number 类型
  } else if (typeof x === "string") {
    // x: string 类型
  } else {
    console.log(x); // (parameter) x: never
    // x: never 类型
    // --strictNullChecks 模式下，这里的代码将不会被执行，x 无法被观察
  }
}
