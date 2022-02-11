// function createArray(length: number, value: any):any[] | Array<any> {
//   let result:any[] = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value
//   }
//   return result
// }

// let result = createArray(2, 1)
// console.log(result)


function createArray<T>(length: number, value: T): T[] {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
  }
  
  let result = createArray<string>(2, '2')
  console.log(result)