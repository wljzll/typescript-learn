// 数组类型

// 1. 「类型 + 方括号」 形式定义数组的类型

// let fibonacci: number[] = [1, 1, 2, 3, 5];

// 数组的项中不允许出现其他的类型：
// let fibonacci: number[] = [1, '1', 2, 3, 5]; // Type 'string' is not assignable to type 'number'. 

// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
// let fibonacci1: number[] = [1, 1, 2, 3, 5];
// fibonacci1.push('8'); // Argument of type 'string' is not assignable to parameter of type 'number'.

// 2. 数组泛型来定义数组的类型
// let fibonacci2: Array<number> = [1, 1, 2, 3, 5];


// 3.用接口表示数组 (一般不用接口来定义数组的类型，接口一般用来定义类数组的类型)
// interface NumberArray {
//     [index: number]: number;
// }
// let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// function sum1() {
//     let args: number[] = arguments; // Argument of type 'string' is not assignable to parameter of type 'number'.
// }

let obj: any={};
function attr(val: string): void;
function attr(val: number): void;
function attr(val:any):void {
    if (typeof val === 'number') {
        obj.age=val;
    } else {
        obj.name=val;
    }
}
attr('zfpx');
attr(9);
attr(true);
console.log(obj);