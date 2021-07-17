'use strict';

// a container
// a list
// a data-structure
// a collection

// indexes:         0.        1.      2.     3.     4. 
let parksNRec = ['Leslie', 'April', 'Ron', 'Ann', 'Tom'];

let waffles = ['JJ\'s', true, [228, 343], 'bacon'];


parksNRec[5] = 'Donna';
parksNRec.push('Tammy', 'Chris');


//.  instanciate    evaluate        increment
for (let i = 0; i < parksNRec.length; i++ ) {
  if (parksNRec[i] !== 'Ron') {
    console.log(`Hello ${parksNRec[i]}!`);
  } else {
    console.log(`I'm ${parksNRec[i]}`);
  }
};