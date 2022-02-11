// null和undefined是所有类型的子类型：
// 1) 在非严格模式下，null和undefined可以赋值给任何类型; 
// 2) 在严格模式下，null只能赋值给null类型,undefined只能赋值给undefined类型;

// let u: undefined = undefined;
// let n: null = null;

// 非严格模式下 
// let num: number = undefined;
// let u: undefined; 
// let num: number = u; 

// 严格模式下 
// let num: number = undefined; // Type 'undefined' is not assignable to type 'number'.
// let u: undefined; 
// let num: number = u; // Type 'undefined' is not assignable to type 'number'.

// 无论是严格还是非严格模式下 void都不能赋值给其他基础类型
// let u: void;
// let num: number = u; // Type 'void' is not assignable to type 'number'.
