// 枚举类型：使用enmu关键字定义数据

// 1.普通枚举
enum Gender1 {
    GIRL,
    BOY
}
console.log(`李雷是${Gender1.BOY}`)
console.log(`韩梅梅是${Gender1.GIRL}`);


enum Gender2 {
    GIRL,
    BOY = 'boy'.length
}
console.log(`李雷是${Gender2.BOY}`)
console.log(`韩梅梅是${Gender2.GIRL}`);
// 2.常数枚举:
// 常数枚举与普通枚举的区别是：
// (1) 它会在编译阶段被删除，并且不能包含计算成员。
// (2) 假如包含了计算成员，则会在编译阶段报错。

// 定义的Colors会被删除
const enum Colors1 {
    RED,
    YELLOW,
    BLUE
}

let myColors = [Colors1.RED] // 编译出的结果就是：var myColors = [0 /* RED */];

// const enum Colors2 {
//     RED,
//     YELLOW,
//     BLUE = 'blue'.length
// }
