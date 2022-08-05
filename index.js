console.log("hello");

let object = {
    fname: "Priyanshi",
    lname: "Sharma",
}

for(let j in object){
    console.log(j); // fname, lname
}

let array = ["ana","bana","cana"];

for(let i in array){
    console.log(i); //0,1,2
}

// Scope chain-

function outerFunction() {
    let a = 5;

    function innerFunction(){
        console.log(a);
    }
    innerFunction();
}
outerFunction();//5

// MAp and filter in array-

// Map- access each and every value in an array

// Filter- when we want to filter something from the existing array, we use filter

const arrayOne = [100, 200, 300, 400, 500];

const arrayTwo = arrayOne.map( x => x + 50);

console.log(arrayTwo); // [150,250,350,450,550]

const arrayThree = arrayOne.filter( x => x > 300);
console.log(arrayThree); // [400,500]

// Passed by value-

let a = 10;
let b = 5;

b = a + 5;
console.log(b); // 15
console.log(a); // 10

// Passed by reference-

let objectt = {
    name: "Don",
    age: 24,
}

let objectt1 = objectt;

objectt1.age = 28,
console.log(objectt1); // name:Don, age:28

// In JavaScript, a “Self-Invoking” function is a type of function that is invoked or called automatically after its definition. The execution of such an anonymous function is done by enclosing it in a parenthesis set followed by another set of parenthesis.

// Syntax :

(function () {
    console.log("Execute me first !!"); // Execute me first !!
  })();

