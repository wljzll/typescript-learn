// 函数声明的两种方式：1、function关键字; 2、函数表达式;

// 1、function关键字

// 1.1 不给形参指定数据类型，ts会自动推断为any类型，但是默认会报错，可以通过修改ts配置文件 关闭这个报错  "noImplicitAny": true,
// function sum(a,b) {
//     return a + b;
// }

// 1.2 给函数参数指定数据类型 以及返回值类型，如果我们不指定返回值类型，ts会自动推导返回值类型
function sum1(a:string, b:string):string {
    return a + b;
}

// 2、函数表达式：如果你使用的是表达式，你给变量定义了类型，你可以把一个兼容的函数赋予他，如果赋予了不兼容的函数，会报错

// 2.1 这种情况下ts会自动给sum变量推导类型：sum: (a: string, b: string) => string
let sum2 = (a:string, b:string):string => {
    return a + b;
}

// 2.2 手动给sum添加类型
let sum3:(a: string, b: string) => string = (a:string, b:string):string => {
    return a + b;
}
// 2.3 给sum4变量定义了类型后，函数就可以不定义类型和指定返回值类型
let sum4:(a: string, b: string) => string = (a, b) => {
    return a + b;
}

// 2.4 抽离给sum添加的类型
type Sum = (a: string, b: string) => string;
let sum5:Sum = (a, b) => {
    return a + b;
}

// 3、可选参数/默认值/剩余参数问题

// 3.1 可选参数
let sum6 = (a:string, b:string|undefined) => {}
sum6('1',undefined) // 这种情况下必须要传递第二个参数，就算是undefined也必须传递

let sum7 = (a:string, b?:string) => {}
sum7('1') // 参数后加 ? 表示此参数可传可不穿

// 3.2 默认值
let sum8 = (a: string, b: string = 'zf') => {
    console.log(b); // 不传递b也是可以的，默认b是 'zf'
}
sum8('1')

// 3.3 剩余参数
let sum9 = (...args:number[]) => {
    console.log(args, 'args');
    
}
sum9(1);
sum9(1, 2, 3);

export {}