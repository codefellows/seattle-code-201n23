'use strict';

// wrap quiz code into functions
let username = prompt('What is your name?');

console.log(`Welcome ${username}.`);

function questionOne() {
  let answerOne = prompt('Do I live in Seattle? Please answer \'yes\' or \'no.\'').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    console.log('You are correct! I live in Seattle.');
  } else {
    console.log('Sorry, that is wrong.');
  }
}

questionOne();
