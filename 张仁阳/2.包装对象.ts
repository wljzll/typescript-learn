// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 所有的原始数据类型都没有属性（property）
// 原始数据类型
// 布尔值
// 数值
// 字符串
// null
// undefined
// Symbol


// 所有的原始数据类型都没有属性，那为什么下面可以调用类的方法？？？
let name = 'zhufeng';
console.log(name.toUpperCase());

console.log((new String('zhufeng')).toUpperCase());

// 这是因为：当调用基本数据类型方法的时候，JavaScript 会在原始数据类型和对象类型之间做一个迅速的强制性切换
let isOK1: boolean = true; // 编译通过
let isOK2: boolean = Boolean(1) // 编译通过 因为Boolean返回的是个简单类型
let isOK3: boolean = new Boolean(1); // 编译失败   期望的 isOK 是一个原始数据类型 而new操作生成的是复杂类型

export {}