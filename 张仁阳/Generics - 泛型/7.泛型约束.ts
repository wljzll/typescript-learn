// function logger<T>(value: T) {
//   console.log(value.length); // 类型“T”上不存在属性“length”。ts(2339)
// }

interface LengthWish {
    length: number
}

function logger2<T extends LengthWish>(value: T) {
    console.log(value.length);
}

// logger2(true) // 类型“boolean”的参数不能赋给类型“LengthWish”的参数。ts(2345)
console.log(1);
console.log('sdf');


