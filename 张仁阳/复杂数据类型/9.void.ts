// void类型：void 表示没有任何类型
// 用途:
// 1. 当一个函数没有返回值时，TS 会认为它的返回值是 void 类型。
// 2. 当我们声明一个变量类型是 void 的时候，它的非严格模式下仅可以被赋值为 null 和 undefined;
// 但是好像目前无论是否严格模式都可以赋值undefined，但不能赋值null

let v1:void = undefined
// let v2:void = null

// 没有返回值：这是比较常见的场景
function greeting(name:string):void {
    console.log('hello',name);
}
greeting('zfpx');