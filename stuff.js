let counter = function (arr) {
  return "There are" + arr.length + "element in the array";
};

const adder = function (a,b) {
    return `The sum of the 2 number is ${a+b}`;
  };

var pi = 3.142; 

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


// Another way of module exports
module.exports = {
    counter : counter,
    adder : adder,
    pi  : pi
};