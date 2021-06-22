// 类 ES6
/**
 * 类的三个属性：
 * 1. 静态属性：只能由类自己调用
 * 2. 实例属性：每个实例自己的属性
 * 3. 原型属性：所有实例共享的属性
 */

// as 断言成xxx 
// ! 非空断言
// ? 链判断运算符 有值取值 无值返回undefined

// 1、类的属性

// 1.1 声明属性如果不赋值默认是不支持的，解决方案：1.修改配置文件，非严格模式可以. 2.使用非空断言
class Pointer1 {
    x!: number // 实例上的属性
    y=0
    constructor(x:number, y:number) { // constructor构造函数的参数和函数相同
        this.x = x;
        this.y = y;
    }
}

class Pointer {
    // x!: number // 实例上的属性
    // y=0
    public x!: number // 实例上的属性
    public y=0
    constructor(x:number, y?:number) { // constructor构造函数的参数和函数相同
        this.x = x;
        this.y = y as number; // y 可能是undefined 会报错 只能想办法修改y类型或判断有无
        if(y) {
            this.y = y;
        }
    }
    static a = 1
}

let pointer = new Pointer(1,2);
pointer.x;
pointer.y;
// pointer.a; // 不存在
Pointer.a;

console.dir(pointer); 


// 2、类的修饰符：public private protected readonly
/**
 * 1. public: 表示 父类本身、子类、外面都可以获取到这个属性
 * 2. protected: 表示父类本身、子类能访问到这个属性
 * 3. private 只有自己能访问到
 * 4. readonly: 表示当前属性不能被修改 指在constructor中赋值完成后就不能再修改
 */
class Animal {
    protected name!:string
    public age!:number
    private test!:number
    readonly test2!:string
    constructor(name:string, age:number) {
        // console.log(this.name, this.age); // undefined undefined
        
        this.name = name;
        this.age = age;
    }
}

class Cat extends Animal {
    address=''
    constructor(name:string, age: number, address:string) {
        super(name, age);
        this.address = address;
    }
}


let tom = new Cat('Tom', 10, '美国');
tom.age;
tom.test2;
// tom.test2 = 'zf' // 无法分配到 "test2" ，因为它是只读属性。
// tom.name // 属性“name”受保护，只能在类“Animal”及其子类中访问。
// tom.test // 属性“test”为私有属性，只能在类“Animal”中访问


// 3、类的静态属性和静态方法: 通过类来调用的就是静态的(可以被继承)
class People {
    static type = "人";
    static getName() {
        return '人类'
    }
    say() {
        console.log('say');
    }
}

class Man extends People {
    static getName() {
        super.getName(); // 静态方法中的super指代的是父类
        return '男人'
    }
    constructor() {
        super(); // constructor中的super也是指代父类
    }
    say() {
        super.say(); //  这个super指代的是父类的原型 People.prototype
        console.log('say man');
        
    }
}

People.type;
People.getName();

console.log(Man.getName());

let p = new People();
let m = new Man();
m.say()


// 4、属性访问器
class People1 {
    static type = "人";
    static getName() {
        return '人类'
    }
    say() {
        console.log('say');
    }
    // 属性访问器（原型属性）
    private _eat :string=''
    get eat() {
        return this._eat
    }
    set eat(newVal) {
        this._eat = newVal
    }
}

export {}