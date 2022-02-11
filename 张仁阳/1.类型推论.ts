// 是指编程语言中能够自动推导出值的类型的能力，它是一些强静态类型语言中出现的特性
// 定义时未赋值就会推论成any类型
// 如果定义的时候就赋值就能利用到类型推论

let username2;
username2 = 10;
username2 = 'zhufeng';
username2 = null;

// 未指定类型但赋值了就会推导出对应的类型，就不能再赋值其他类型
let age = 12
age = 'sdf'


export {}