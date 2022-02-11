// 联合类型（Union Types）表示取值可以为多种类型中的一种。
   // 1) 联合类型使用 | 分隔每个类型.
   // 2) 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法.    

// // 例1：不会报错
// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// // 例2：报错
// let myFavoriteNumber: string | number;
// myFavoriteNumber = true; // Type 'boolean' is not assignable to type 'string | number'. 


let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;

export {}
