// 属性装饰器

/**
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数:
 *   第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *   第二个参数是属性的名称
 */

namespace a {
  function upperCase(target: any, propertyKey: string) {
      console.log('装饰器先被执行');
      
    let value = target[propertyKey];
    const getter = function () {
      return value;
    };
    const setter = function (newValue: string) {
      value = newValue.toUpperCase();
    };
    // 替换属性，先删除原先的属性，再重新定义属性
    if (delete target[propertyKey]) {
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    }
  }
  class Person {
    @upperCase
    name: string = "zhufeng";
    constructor() {
        console.log('构造函数后被执行');
        
    }
  }
  let p = new Person()
  console.log(p.name);
  
}
