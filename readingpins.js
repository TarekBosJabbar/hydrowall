var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var input1 = new Gpio(11, 'in' , 'both'); //use GPIO pin 4, and specify that it is output

var input2 = new Gpio(9, 'in', 'both');

var input3 = new Gpio(10, 'in', 'both');

var input4 = new Gpio(8, 'in', 'both');

console.log("Starting to listen");

console.log(input1.readSync());

console.log(input2.readSync());

console.log(input3.readSync());

console.log(input4.readSync());

input1.watch((err, value) => {
  if (err) {
    throw err;
  }
 
  console.log("input1 " + value);
});

input2.watch((err, value) => {
  if (err) {
    throw err;
  }
 
  console.log("input2 " + value);
});

input3.watch((err, value) => {
  if (err) {
    throw err;
  }
 
  console.log("input3 " + value);
});

input4.watch((err, value) => {
  if (err) {
    throw err;
  }
 
  console.log("input4 " + value);
});