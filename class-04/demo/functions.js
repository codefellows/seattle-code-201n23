'use strict';
/* -- Function basics -- */

// declare a function
function happyBirthday() {
  console.log('Happy birthday')
}
// invoke the function
happyBirthday('Pam');


// declare a function another way
let happyBirthdayAnotherWay = function() {
  console.log('Happy birthday')
}
// invoke/call the function
// This kind of function can only be invoked below the function's declaration
happyBirthdayAnotherWay('Kelly');


/* --- Using parameters and arguments: --- */ 

let username = prompt('What is your name?');

// declare a function with a parameter, ex: "name"
function birthdayGreeting(name) {
  console.log(`Happy Birthday ${name}!`);
  console.log('We hope that your day is filled with joy and lots of good cake');
  console.log(`${name}, you are the best!`);
  // return `${name}, you are the best!`;
  console.log("Best wishes from the team at the Dunder Mifflin Paper Company");
}

// invole/call a function with a argument
birthdayGreeting(username);


/* --- Using default parameters: --- */ 

// declare a default parameter last:
function birthdayGreeting(name, age, cakeFlavor,from = 'the staff at Dunder Mifflin') {
  console.log(`Happy Birthday ${name}! We're putting ${age} candless on your ${cakeFlavor} cake, Best wishes from ${from}!`);
}

// We don't need to pass an arguemnt for "from"  
// because the function has a default value set:
birthdayGreeting('Dwight', 55, 'beat');
// But we can override the default if we want:
birthdayGreeting('Jim', 30, 'vanilla', 'Pam');


/* --- A function should do only one thing: --- */ 

// organize functions to perform common tasks
function addFlour() {
  // code here
}
function pie() {
 addFlour();
 // more code here
}
function cake() {
 addFlour();
 // more code here
}



/* --- Functions can build on the logic of other functions: --- */

function addTogether(value1, value2) {
  return value1 + value2;
}

function addTax(sub, taxRate) {
  let total;
  // code goes here
  return total;
}

let subtotal = addTogether(234, 876);
console.log(`subtotal: ${subtotal}`);

let totalBill = addTax(subtotal, 6.5);



