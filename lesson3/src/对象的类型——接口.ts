// 接口: 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
// 1) 无可选属性接口：赋值的时候，变量的形状必须和接口的形状保持一致。
// 2) 可选属性接口：可选属性可有可无，但是不允许添加多余属性
// 3) 任意属性：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// 4) 只读属性：注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

// -------------------- 无可选属性 -----------------------
// // 例1：
// interface Person {
//     name: string;
//     age: number;
// }

// let tom1: Person = {
//     name: 'Tom',
//     age: 25
// };

// // 例2： 少属性也不行
// interface Person {
//     name: string;
//     age: number;
// }

// let tom2: Person = {
//     name: 'Tom'
// }; // Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.

// 例3：多属性也不行
// interface Person {
//     name: string;
//     age: number;
// }

// let tom3: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// }; // Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.

// -------------------- 无可选属性 -----------------------

// --------------------- 可选属性 ------------------------
// // 例1：可无
// interface Person {
//     name: string;
//     age?: number;
// }

// let tom3: Person = {
//     name: 'Tom'
// };

// // 例2：可有
// interface Person {
//     name: string;
//     age?: number;
// }

// let jerry: Person = {
//     name: 'Tom',
//     age: 25
// };

// 例3：不可添加多余属性
// interface Person {
//     name: string;
//     age?: number;
// }

// let jack: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };  // Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
// --------------------- 可选属性 ------------------------

// --------------------- 任意属性 ------------------------
// // 例1：可行
// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }

// let tom5: Person = {
//   name: "Tom",
//   gender: "male",
// };

// 例2：非严格模式可以 严格模式会报错
// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string | number;
// }
// 严格模式下可选属性得声明成
// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string | number | undefined;
// }


// let tom9: Person = {
//     name: 'Tom',
//     age: 11,
//     gender: 'male'
// }; // Property 'age' of type 'number | undefined' is not assignable to string index type 'string'.

// function sum() {
//     let args: {
//         [index: number]: number;
//         length: number;
//         callee: Function;
//     } = arguments;
// } // 任意类型，但callee并不是任意类型number的子集，但未报错

// function sum() {
//     let args: {
//         [index: string]: number;
//         length: number;
//     } = {
//        length: 1,
//        1: 1,
//        2: '2' // 不能将类型“string”分配给类型“number”
//     };
// } 
// 重要!!!!!!!!!!
// 如上，虽然指定了任意属性index的类型是 number 类型, 但length 属性是 string 类型的签名，所以不受前者的影响, callee属性名也是string类型的签名, 同样不受前者的影响。
// 但是反过来就不一样了，如果接口定义了 string 类型的任意属性签名，它不仅会影响其他 string 类型的签名，也会影响其他 number 类型的签名。
// 这一点可以参考两种任意类型签名并存时，number 类型的签名指定的值类型必须是 string 类型的签名指定的值类型的子集这句话。

// --------------------- 任意属性 ------------------------


// --------------------- 只读属性 ------------------------
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     id: 89757,
//     name: 'Tom',
//     gender: 'male'
// };

// tom.id = 9527; // Cannot assign to 'id' because it is a read-only property.

// --------------------- 只读属性 ------------------------

export {}
