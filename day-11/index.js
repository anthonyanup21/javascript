
// const timeId=setTimeout(function(){ console.log("hello")})

// // setTimeout takes two arguments one is function another one is time in milisecond 
// //it runs the function only after that milisecond
// //the setTimeout returns timer id thwough which we can identify the setTimeout where there is multiple setTimeout
// //through that id we can cancle the setTimeout in middle 


// function a(){ 
//     console.log("hello")
//     console.log(arguments)
// }
// setTimeout(a,3000,"anup","hello","how")//anything we pass after the time we can use that in the callbackfunction through arguments

// //we mostly dont use it its depricated
// function b(){
//     console.log("hello world")
// }
// setInterval(b,2000)
// //it runes once after 2seconds untill we clearit useing clearInverval


//event loop and callback queue
debugger
for (var i=0;i<10;i++){
    console.log(i)
}
console.log(i)