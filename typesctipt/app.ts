const isDone:boolean = false;
const decmal: number = 6;
const color: string = 'blue';
const list: number[] = [1,2,3];
const books: object[] = [
  {title: 'book 1', author: 'Ja'},
  {title: 'book 2', author: 'Ban'},
  {title: 'book 3', author: 'Yao'},
];

const greet = (name: string) => {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

function getAge(): number {
  return 26;
}

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  if (!obj.last) {
    console.log(obj.first);
  } else {
    console.log(obj.first + " " + obj.last);
  }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printId(id: number | string | boolean) {
  console.log("Your ID is: " + id);
}
printId(101);
printId("202");
printId(true);

function printId2(id: string) {
  console.log("Your ID is: " + id.toUpperCase());
}
printId2("202");

function getFirstThree(x: number[] | string[]) {
  return x.slice(0, 3);
}

console.log(getFirstThree([0,2,6,8,15]));
console.log(getFirstThree(['hi','by', 'why', 'oh']));

type ID = number | string;

type Point = {
  x: number;
  y: number;
};
 
function printCoord3(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord3({ x: 100, y: 100 });

// type UserInputSanitizedString = string;
 
// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }
 
// let userInput = sanitizeInput(getInput());
 
// userInput = "new input";

interface PointInt {
  x: number;
  y: number;
}

interface PointInt {
  x: number;
  y: number;
}
 
function printCoordInt(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoordInt({ x: 100, y: 100 });

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

const x = 5 as number;
const y: number = 5;


let changingString = "Hello World";
changingString = "Olá Mundo";

let req = { url: "https://example.com", method: "GET" } as const;


enum Bag {
  dragonfly= 1,
  fly = 2,
  worm = 3,
}


let c: Bag = Bag.fly;
console.log(Bag);

