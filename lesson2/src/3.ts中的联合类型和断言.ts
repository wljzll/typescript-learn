// 一、联合类型：从理解上来说我们可以认为时并集

let str: string | number; // 当我们只声明没有给变量赋值时，只能调用两者类型中共同的方法

// str.toFixed() // 报错 类型“string”上不存在属性“toFixed”。

str = 123; // 当我们给变量赋值后，就可以根据值推导数据类型
str.toFixed(2);

str = 'zf';
str.toLocaleLowerCase();


let ele: HTMLElement | null = document.getElementById('#app');
// ele.style.color = 'red'; // 报错 对象可能为 "null"
ele!.style.color = 'red'; // 非空断言 表示ele一定存在不是null

ele?.style?.color; // 相当于 ele && ele.style && ele.style.color 只能取值不能赋值

// 二、断言：判定变量就是这种类型，但是断言不能断言成不存在的属性
(<HTMLElement>ele).style.color = 'red'; // 这个和jsx语法有冲突 尽量不采用
(ele as HTMLElement).style.color = 'red';

// ele as boolean // 报错 类型 "HTMLElement | null" 到类型 "boolean" 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 "unknown"。类型“HTMLElement”不可与类型“boolean”进行比较。

(ele as any) as boolean; // 双重断言(不建议使用 会破坏原有类型)

// 三、字面量类型
// let direction: 'up' | 'down' | 'left' | 'right';
// direction = 'up'; // direction只能从up/down/left/right中取一个

type Direction = 'up' | 'down' | 'left' | 'right'; // 使用type定义类型别名
let direction:Direction = 'up';
// direction = 'xx'; // 报错 不能将类型“"xx"”分配给类型“Direction”

export { }