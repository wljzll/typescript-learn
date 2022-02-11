// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean
// let unusable: void = undefined;
// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);


// interface Person {
//     name: string;
//     age: number;
// }

// let instance = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// }
// let tom1: Person = instance;

// let tom2: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// }

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
}

let param = { colour: "red", width: 100 }
let mySquare = createSquare(param);


interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { 
    this.currentTime = new Date
  }
}

interface ClockConstructor {
  new (hour: number, minute: number): void;
}

class Clock implements ClockConstructor {
  constructor(h: number, m: number) { }
}
export {}