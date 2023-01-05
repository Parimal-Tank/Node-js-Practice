//Exmple of setTimeout

// setTimeout(function(){
//     console.log("after 3 second");
//     console.log("Hello");
// } , 3000);

// let time = 1;
// setInterval(function(){
//     console.log("after" + time + "second");
//     console.log("hello");
//     time++;
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// function example 

// function sayHello(){
//     console.log("hello");
// }


// Example of Function Expression
// sayHello();
// sayBuy();


// function callfunction(fun){
//     fun();
// }

// let sayBuy = function(){
//     console.log("hiii");
// }

// callfunction(sayBuy);



// Example of Module and Require
// const counter = require('./count');
const stuff = require('./stuff');


console.log(stuff.counter(["hello" , "hii" , "how are you"]));
console.log(stuff.adder(5 , 7));
console.log(stuff.adder(stuff.pi , 5));