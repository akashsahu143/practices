const name = "akash"
const repoCount = 50

// console.log(name + repoCount + " value");  // this is odddated so am not recamended

console.log(`hello myh name is ${name} and my repocount is ${repoCount}`);  //string implitation and morden way 


const gameName = new String('Akash-kumar-saw')
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "     Akash     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akash.com/akash%20blog"

console.log(url.replace('%20', '-'))

// you can ask question let example 

console.log(url.includes('akash')) //true
console.log(url.includes('saw'))  //false

// convert string into array 

console.log(gameName.split('-'));

