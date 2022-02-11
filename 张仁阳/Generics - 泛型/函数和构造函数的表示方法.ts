// 函数类型的两种表示方法:
type func1 = (a: number, b: string) => number;
interface func2 {
  (a: string, b: number): number;
}




// 构造函数的两种表示方法：
type newFunc1 = new (a: number, b: string) => void;

interface newFunc2 {
  new (a: string, b: number): void;
}


class Animal1 {
  constructor(a: number, b: string) {
    console.log('Animal1');
    
  }
}
class Animal2 {
    constructor(a: string, b: number) {
        console.log('Animal2');
    }
  }
  

let nf1: newFunc1 = Animal1;
let nf2: newFunc2 = Animal2;

new nf1(1, '1')
new nf2('1', 1)
export {}