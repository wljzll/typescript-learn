interface Animal {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
  sex: boolean;
}

function getName(animal: Animal): string {
  return animal.name;
}

let p = {
  name: "zhufeng",
  age: 11,
  sex: true,
};

// 不能将类型“{ name: string; age: number; sex: boolean; }”分配给类型“Animal”
// let p1: Animal = {
//   name: "zhufeng",
//   age: 11,
//   sex: true,
// };

// 重要！！！：对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
getName(p);

// 类型“{ name: string; age: number; sex: boolean; }”的参数不能赋给类型“Animal”的参数。
// getName({
//   name: "zhufeng",
//   age: 11,
//   sex: true,
// });
