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


