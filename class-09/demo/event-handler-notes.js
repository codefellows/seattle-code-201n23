'use strict';

//Event handling
//Event is FIRED (or RAISED)
//Code is TRIGGERED

//Event types:
//- click
//- submit
//- on Change
//- on page load
//- on mouse over
//- on key release

// event listener is code that iss going to be TRIGGERED when an event isss FIRED
// bind: bind or tether an event listener to an event
// event handler: code the runs in response to the event

// OLD WAY #1
// DO NOT DO THIS!:
// <article onClick="handleClick">

// OLD WAY #2
// DO NOT DO THIS:

// element.onEvent = functionName;
// ex:
// button(document.getElementById('button')).onSubmit=handleEvent;

// DOM Level 2 Event Handlers
// OUR WAY — DO THIS!

//element.addEventListener('event', functionName);
// ex:
// button.addEventListener('click', handleClick);

function greeting(name) {
  console.log(`Hello ${name}`);
}

function processUserInput(callBack) {
  let name = prompt('Please enter your name.');
  callBack(name);
}
processUserInput(greeting);


let myContainer = document.getElementById('container');
myContainer.addEventListener('click', processUserInput);

// Two types of Event handling
// 1. Event bubbling — this is what we will usse
// we can listen to the larger element and "hear" events on the smaller pieces

// 2. Event capturing
// the event is first captured by the outermosst element andd propagated to the inner elements