"use strict";
const isDone = false;
const decmal = 6;
const color = 'blue';
const list = [1, 2, 3];
const books = [
    { title: 'book 1', author: 'Ja' },
    { title: 'book 2', author: 'Ban' },
    { title: 'book 3', author: 'Yao' },
];
const greet = (name) => {
    console.log("Hello, " + name.toUpperCase() + "!!");
};
function getAge() {
    return 26;
}
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    if (!obj.last) {
        console.log(obj.first);
    }
    else {
        console.log(obj.first + " " + obj.last);
    }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101);
printId("202");
printId(true);
function printId2(id) {
    console.log("Your ID is: " + id.toUpperCase());
}
printId2("202");
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([0, 2, 6, 8, 15]));
console.log(getFirstThree(['hi', 'by', 'why', 'oh']));
function printCoord3(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord3({ x: 100, y: 100 });
function printCoordInt(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordInt({ x: 100, y: 100 });
const myCanvas = document.getElementById("main_canvas");
const myCanvas2 = document.getElementById("main_canvas");
const x = 5;
const y = 5;
let changingString = "Hello World";
changingString = "Olá Mundo";
let req = { url: "https://example.com", method: "GET" };
var Bag;
(function (Bag) {
    Bag[Bag["dragonfly"] = 1] = "dragonfly";
    Bag[Bag["fly"] = 2] = "fly";
    Bag[Bag["worm"] = 3] = "worm";
})(Bag || (Bag = {}));
let c = Bag.fly;
console.log(Bag);
