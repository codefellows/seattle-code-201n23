'use strict';

let myFavColors = ['blue', 'cream', 'gold'];
let userResponse = 'cream';

// While Loop

let attemptsRemaining = 3;

while (attemptsRemaining) {
  for (let i = 0; i < myFavColors.length; i++) {
    if (userResponse === myFavColors[i]) {
      console.log('You are correct!');
      // something that will stop the loop if it is correct.
    }
  }

  attemptsRemaining--;
  console.log(`You have ${attemptsRemaining} attempts remaining.`);
};


// For Loop
let attempts = 7;
for (let i = 0; i < attempts; i++) {
  console.log(`For loop: You have ${attempts - i - 1} attempts remaining.`);
  for (let j = 0; j < myFavColors.length; j++) {
    if (userResponse === myFavColors[j]) {
      console.log('You are correct!');
      // something that will stop the loop if it is correct.
    }
  }

}

// for (let i = 7; i > 0; i--) {
//   console.log(`For loop: You have ${i - 1} attempts remaining.`);
// }

// Do While Loop
// It will run once no matter what. And will only run again, if the criteria is met.
let attemptsLeft = 4;
do {
  console.log(`Do While: You have ${attemptsLeft} attempts remaining.`);
} while (attemptsLeft--);



// SUDO CODE
// comments that describe what I need to do.
// step by step

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
//Indicates through an alert if the guess is “too high” or “too low”.
//It should give the user exactly four opportunities to get the correct answer.
//After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// Add 6th question
// respond if too high
// respond if too low
// respond if correct and guesses remaining
// respsond if no correct and no guesses remaining