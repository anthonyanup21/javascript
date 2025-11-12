//length
let a="hello anup"
console.log(a.length)

//toUpperCase
let b=a.toUpperCase()
console.log(b)

let c="  hello i am anup  "
let d=c.trim().toUpperCase()//this is called as chaining
console.log(d)


//indexOf
let text="I love javascript"
console.log(text.indexOf("t"))

//incldes
console.log(text.includes("love"))

//replace (it replace only first charactor found)
console.log(text.replace("javascript","python"))

//replaceAll
console.log(text.replaceAll("a","A"))

//concat
console.log(text.concat(" and python", " " ,"and also c++")) //we can also add multiple string

//padStart
const accountNumber="7896"
console.log(accountNumber.padStart(16,"*"))//************7896

//padEnd
console.log(accountNumber.padEnd(16,"*"))//7896************

//charCodeAt
console.log("a".charCodeAt()) //gives ascii code

//split
const message="I love javascript"
console.log(message.split(" "))


//template literals

const name="anup"
console.log(`hello my name is ${name}`)


//Math object in javascript

console.log(Math.round(1.9))
console.log(Math.ceil(1.01))
console.log(Math.floor(1.9))
console.log(Math.sqrt(25))
console.log(Math.floor(Math.random()*101))

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(10, 50)); // gives random between 10 and 50

console.log(0/0)//NaN

console.log(8/0)//Infinity

console.log(-8/0)//-Infinity

console.log("1" * "2")//2 type will be number
console.log("1" + "2")//12 type will be string

console.log("1" - "2")//-1 type will be number

console.log("1"/"2")//0.5 type will be nuber






