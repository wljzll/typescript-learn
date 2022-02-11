// let u: undefined = undefined;
// let n: null = null;

// 非严格模式下 undefined和null都可以赋值给其他类型 严格模式下会报错
// let num: number = undefined; Type 'undefined' is not assignable to type 'number'.
// 这样也不会报错
let u: undefined; // 这不会报错
let num: number = u; // 这会报错 Type 'undefined' is not assignable to type 'number'.
let n:string = null

// // 无论是严格还是非严格模式下 void都不能赋值给其他基础类型
// let u: void;
// let num: number = u; // Type 'void' is not assignable to type 'number'.