export {}
function createArray<T = number>(len: number, value: T): T[] {
  let result: T[] = [];
  for (let i = 0; (i < len); i++) {
    result[i] = value;
  }
  return result;
}

// 推导的泛型会覆盖默认泛型
let res = createArray(2, 'x')
console.log(res);
