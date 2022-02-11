function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]];
}

let swapped = swap<string, number>(["zhufeng", 11]);
console.log(swapped);
console.log(swapped[0].toFixed());
console.log(swapped[1].length);
