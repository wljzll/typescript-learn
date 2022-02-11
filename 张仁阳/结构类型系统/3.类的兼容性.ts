// 在TS中是结构类型系统，只会对比结构而不在意类型
export {};

// 1) 并不是父类兼容子类，子类不兼容父类
namespace A {
  class Animal {
    name: string;
  }
  class Bird extends Animal {
    swing: number;
  }

  let a: Animal;
  a = new Bird();

  let b: Bird;
  //并不是父类兼容子类，子类不兼容父类
  // b = new Animal(); // 类型 "Animal" 中缺少属性 "swing"，但类型 "Bird" 中需要该属性
}

//如果父类和子类结构一样，也可以的
namespace B {
  class Animal {
    name: string;
  }
  //如果父类和子类结构一样，也可以的
  class Bird extends Animal {}

  let a: Animal;
  a = new Bird();

  let b: Bird;
  b = new Animal();
}

namespace C {
  //甚至没有关系的两个类的实例也是可以的
  class Animal {
    name: string;
  }
  class Bird {
    name: string;
  }
  let a: Animal;
  a = new Bird();
  let b: Bird;
  b = new Animal();
}
