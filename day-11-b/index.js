
// Tricky interview questions
function x(){
    for (var i=1;i<=5;i++){
        setTimeout(function (){console.log(i)},i*1000)
    }
    console.log("Hello world")
}
x()
//66666

// function y(){
//     for (let i=1;i<=5;i++){
//         setTimeout(function (){console.log(i)},i*1000)
//     }
//     console.log("Hello world")
// }
// y()
// 12345

// function z(){
    
//     function close(i){
//         setTimeout(function (){console.log(i)},i*1000)
//     }
//     for (var i=1;i<=5;i++){
//         close(i)
//     }

//     console.log("Hello world")
// }
// z()
// //12345