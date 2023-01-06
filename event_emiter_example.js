// const events = require('events');

// const myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent' , 'the event was emitted');



// Another Example

// var events = require('events');
// var util = require('util');

// const Person = function(name){
//     this.name = name;
// }

// using jQuery

// util.inherits(Person , events.EventEmitter);

// const james = new Person('james');
// const mary = new Person('mary');
// const ryu = new Person('ryu');
// const peopel = [ james , mary , ryu];


// peopel.forEach(function(person){

//     person.on('speak', function(mssg){
//         console.log(person.name + 'said:' + mssg);
//     });
// });

// james.emit('speak' , 'hey dudes');
// ryu.emit('speak' , 'I want a curry');




// Another Example :

const EventEmitter = require('events');

const event = new EventEmitter();

event.on("sayMyName" , () => {
    console.log("my name is parimal");
});


event.emit('sayMyName');

event.on("checkPage" , (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage" , 200 , "ok");