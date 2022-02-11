export {}

// 1.联合类型
let num: string | number
num = 'zhufeng'
num = 1

let num1
num1 = 'zhufeng'
num1 = 11


let num2: {
    toString(): string
}

num2 = 'zhufeng' // 只要值有toString()方法都可以