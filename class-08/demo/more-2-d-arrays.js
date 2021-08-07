'use strict';

let starWars = ['Luke', 'Han', 'Leia', 'Chewie', 'Obi-Wan', 'Yoda', 'Lando'];

function forceBeWithYou() {
  for (let i = 0; i < starWars.length; i++) {
    console.log(`${starWars[i]} stands up to greet everyone.`);
    for (let j = 0; j < starWars.length; j++) {
      if (i !== j) {
        console.log(`${starWars[i]} says 'May the force be with you' to ${starWars[j]}.`);
      }
    }
  }
}

//forceBeWithYou();

let letters = [
  ['L', 'a', 'T', 'a', 'B'],
  ['i', 'n', 'i', 'n', 'e'],
  ['o', 'd', 'g', 'd', 'a'],
  ['n', '', 'e', '', 'r'],
  ['s', '', 'rs', '', 's']
];

console.table(letters);

let concatStrings = function () {
  for (let i = 0; i < letters.length; i++) {
    let str = '';
    for (let j = 0; j < letters[i].length; j++) {
      str += letters[j][i];
    }
    console.log(str);
  }
  console.log('oh, my!');
}

concatStrings();