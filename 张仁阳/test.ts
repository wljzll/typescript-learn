function factory<T>(type: { new (): T }): T {
  return new type(); // This expression is not constructable.
}

namespace A {
  // 接口的交叉: 只有存在同时满足两个接口的子集才能交叉 否则交叉出的接口无法使用
  interface Bird {
    name: string,
    fly(): void
  }
  interface Person {
    name: string,
    talk(): void
  }
  type BirdPerson = Bird & Person;
  let p: BirdPerson = { name: 'zhufeng', fly() { }, talk() { } };
  p.fly;
  p.name
  p.talk;


  interface X {
    a: string;
    b: string;
  }

  interface Y {
      a: number;
      c: string
  }

  type XY = X & Y;
  type D = XY
  type YX = Y & X;
  type c = string & number
  let p1: XY={a:'',b:'',c:''};

  // 联合类型的交叉: 联合类型的交叉类型就是取交集
  type Ta = string | number;
  type Tb = number | boolean;
  type Tc = Ta & Tb;

  type Te = string | object;
  type Tf = number | boolean;
  type Tg = Te & Tf; // never
}
