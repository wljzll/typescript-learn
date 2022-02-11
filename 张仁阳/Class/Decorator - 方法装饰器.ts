// 方法装饰器

/**
 * 第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 第二个参数是方法的名称
 * 第三个参数是方法描述符
 */

namespace a {
  // 属性值转大写
  function upperCase(target: any, propertyKey: string) {
    // console.log('装饰器先被执行');

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
  function noEnumerable(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("target.getName", target.getName);
    console.log("target.getAge", target.getAge);
    descriptor.enumerable = true;
  }
  class Person {
    @upperCase
    name: string = "zhufeng";
    public static age: number = 10;
    constructor() {
      // console.log("构造函数后被执行");
    }
    @noEnumerable
    getName() {
      console.log(this.name);
    }
  }
  let p = new Person();
  // console.log(p.name);
}
