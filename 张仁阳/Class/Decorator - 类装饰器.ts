// 装饰器
/**
 * 1) 装饰器是一种特殊的类型声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为;
 * 2) 常见的装饰器有: 类装饰器、属性装饰器、方法装饰器、参数装饰器;
 * 3) 装饰器的写法分为普通装饰器和装饰器工厂;
 */

// 类装饰器：类装饰器在类声明之前声明，用来监视、修改或替换类定义

// 1) 普通装饰器：修改类定义
namespace a {
  function addNameEat(constructor: Function) {
    console.log("执行装饰器");
    constructor.prototype.name = "zhufeng";
    constructor.prototype.eat = function () {
      console.log("eat");
    };
  }
  @addNameEat
  class Person {
    name!: string;
    eat!: Function;
    constructor() {
      console.log("执行原constructor");
    }
  }

  let p = new Person();
  console.log(p.name);
  p.eat();
}

// 2) 装饰器工厂: 就是返回一个函数当作装饰器
namespace b {
  function addNameEatFactory(name: string) {
    return function (constructor: Function) {
      constructor.prototype.name = "zhufeng";
      constructor.prototype.eat = function () {
        console.log("eat");
      };
    };
  }
  @addNameEatFactory("zhufeng")
  class Person {
    name!: string;
    eat!: Function;
    constructor() {
      console.log("执行原constructor");
    }
  }

  let p = new Person();
  console.log(p.name);
  p.eat();
}

// 3) 替换类定义
namespace c {
  function enhancer(constructor: Function) {
    console.log('执行装饰器')
    return class {
      name: string = "zhufeng"
      eat() {
        console.log("吃饭");
      }
      constructor () {
        console.log('执行装饰器中替换的类的构造函数');
        
      }
    };
  }

  @enhancer
  class Person {
    name!: string;
    eat!: Function;
    constructor() {
      console.log("执行原constructor");
    }
  }

  let p = new Person();
  console.log(p.name);
  p.eat();
}
