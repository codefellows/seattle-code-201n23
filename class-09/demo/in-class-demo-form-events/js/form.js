'use strict';

// step 1: event handling
// must get the container we are listening to from the DOM
let myForm = document.getElementById('form');

// this would also work:
// let myForm = document.querySelector('form');

//step 3:  create event handler to do specific things when event is FIRED or RAISED
// event Handler
// takes in ONE parameter - the event
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.firstName.value);
  let userFirstName = event.target.firstName.value;
  let userLastName = event.target.lastName.value;
  console.log(userFirstName, userLastName);
}


// step 2: add event listener, we pass in two arguements!  event as string, and callback function
// placed at bottom typically (below other function declarations)
myForm.addEventListener('submit', handleSubmit);

