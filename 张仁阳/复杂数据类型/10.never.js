// never是其它类型(null undefined)的子类型，代表不会出现的值
// never只是类型，不能作为值使用
// 1.作为不会返回（ return ）的函数的返回值类型
// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function error(message) {
    throw new Error(message);
}
// 由类型推论得到返回值为 never
function fail() {
    return error("Something failed");
}
// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function infiniteLoop() {
    while (true) { }
}
// Compiled with --strictNullChecks
function fn(x) {
    if (typeof x === 'number') {
        // x: number 类型
    }
    else if (typeof x === 'string') {
        // x: string 类型
    }
    else {
        // x: never 类型
        // --strictNullChecks 模式下，这里的代码将不会被执行，x 无法被观察
    }
}
