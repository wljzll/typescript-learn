// 1. 泛型类
class MyArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value);
  }
  getMax(): T {
    let result = this.list[0];
    for (let index = 0; index < this.list.length; index++) {
      const item = this.list[index];
      if (item > result) {
        result = item;
      }
    }
    return result;
  }
}

let arr = new MyArray<number>();
arr.add(1);
arr.add(2);
console.log(arr.getMax());

// 2.泛型与new

function factory<T>(type: { new (): T }): T {
  return new type(); // This expression is not constructable.
}

class Animal {}
factory<Animal>(Animal);
