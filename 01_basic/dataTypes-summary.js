//primitive

// 7 types: String, number, boolean, null(empty),undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid);


const bigNumber = 1235468755254n

// Refrance types(Non primitive)

//Array, Objects, Function 

const heros =["saktimaan","krish","hanuman"];
let myObj ={
    name:"akash",
    age:21,
}

const myFunction= function(){
    console.log("Hello world");
}

// how to know deta Types of variable

console.table( heros);
