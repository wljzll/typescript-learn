// 函数的重载

/**
 * 需求：希望把一个字符串或者数字转换成一个数组
 * 123 => [1, 2, 3]
 * '123' => ['1', '2', '3']
 */

// 方案一：这个方法传入数字可能返回字符串数组，传入字符串可能返回数字数组
// function toArray1(value:number|string):number[]|string[] {
//     if(typeof value === 'string') {
//         return value.split('')
//     }else {
//         return value.toString().split('').map(item => parseInt(item))
//     }
// }

// 方案二：重载 三个声明联合起来，就保证传入number必须返回number数组 传入string必须返回string数组
function toArray2(value:number):number[]
function toArray2(value:string):string[]
function toArray2(value:number|string){
  if(typeof value === 'string') {
      return value.split('')
  }else {
      return value.toString().split('').map(item => parseInt(item))
  }
}
