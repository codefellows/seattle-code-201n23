'use strict';

//.             0.        1.      2.     3.      4
let months = ['March', 'April', 'May', 'June', 'July'];
console.log(months);

// months[8] = 'November';
// console.log(months);

// pop()
// Removes the LAST element from an array
let poppedItem = months.pop();
console.log(months);
console.log(poppedItem);

// shift()
// Removes the FIRST element from an array, AND reordders the indexes of all the other items.
let shiftedItem = months.shift();
console.log(months);
console.log(shiftedItem);

// .push()
// adds to the END of the array
months.push('July');
console.log(months);

months.push('August', 'September', 'October');
console.log(months);

// unshift()
// inserts an element into the FRONT of the array AND reorders all elements after it.
months.unshift('February');
console.log(months);

// splice()
// splice( start index, number of items to remove, what to add if anything)
months.splice(1, 0, 'March');
console.log(months);

months.unshift('January');
console.log(months);

months.push('November', 'December');
console.log(months);

// stetch goal
// write some For loops that do thingss with theses arrays
// which are school months?




// // Example problem
// let numbers = [3, 4, 5, 6, 7, 8, 9, 10];
//   let nums = [82, 2, 82];
//
// 	//define a function that takes in an array, adds the first three elements of the array, and returns a DIFFERENT array with 2 elements. The first element will be a message (String), the second will be the sum of the three elements.
//
//   function adder(arr) {
//     let sum = arr[0] + arr[2] + arr[1];
//     let message = `The sum is ${sum}`;
//     return [message, sum];
//   }
//
//   let added = adder(numbers)[1];
//   console.log(added);
//   let added2 = adder(nums)[1];
//   console.log(added2);
//   console.log(added + added2);