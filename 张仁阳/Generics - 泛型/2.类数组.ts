function sum(a: number, b: number, c: number) {
  console.log(a, b, c);
  let args: IArguments = arguments;
  console.log(args)
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
sum(1, 2, 3);

let root = document.getElementById("root");
let children: HTMLCollection = (root as HTMLElement).children;
children.length;
let nodeList: NodeList = (root as HTMLElement).childNodes;
nodeList.length;


export {}