// 泛型接口也就是在接口中使用泛型


// 第一种：这种泛型接口是在声明函数时，给函数传递泛型变量
interface Calculate {
    <T>(a: T, b: T): T
}

let add: Calculate = function<R>(a: R, b: R) {
    return a
}

add<number>(1, 1)


// 第二种：在定义接口的时候，给接口添加泛型变量
interface Cart<T>{
    list: T[]
}

// let cart:Cart = [] //泛型类型“Cart<T>”需要 1 个类型参数。ts(2314)

let cart:Cart<{name: string, price: number}> = {
    list: [{
        name: 'zhufeng',
        price: 11
    }]
}