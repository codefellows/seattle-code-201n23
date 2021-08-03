'use strict';

console.log('Hello World');
const allSammies = [];

// let oneSandwich = {
//   bread: 'whole wheat',
//   meat: 'turkey',
//   cheese: 'cheddar',
//   isDelicious: true,
// }

// let anotherSandwich = {
//   bread: 'rye',
//   meat: 'ham',
//   cheese: 'swiss',
//   isDelicious: true,
// }

// let yetAnotherSandwich = {
//   bread: 'white',
//   meat: 'bologna',
//   cheese: 'american',
//   isDelicious: true,
// }

// TODO create a constructor named Sandwich and recreate all three of the above object literals.  Push all three instances of Sandwich into the allSammies array.

function Sandwich(bread, meat, cheese, isDelicious) {
  this.bread = bread;
  this.cheese = cheese;
  this.meat = meat;
  this.isDelicious = isDelicious;
  this.allSammies = function() {
    allSammies.push(this);
  }
  this.allSammies();
}

let oneSandwich = new Sandwich(
  'whole wheat',
  'turkey',
  'cheddar',
  true
);
let anotherSandwich = new Sandwich(
  'rye',
  'ham',
  'swiss',
  true
);
let yetAnotherSandwich = new Sandwich(
  'white',
  'bologna',
  'american',
  true,
);

// oneSandwich.allSammies();
// anotherSandwich.allSammies();
// yetAnotherSandwich.allSammies();

// console.log(oneSandwich, anotherSandwich, yetAnotherSandwich);

// allSammies.push(oneSandwich, anotherSandwich, yetAnotherSandwich);
//console.log(allSammies);

// 'this' refers to the instance of Sandwich that WILL BE created
// this refers to the objects created by Sandwich





// If this constructor had at least one prototype method, would you say that the Sandwich constructor "has" any methods?  why? 

Sandwich.prototype.sayYum = function() {
  console.log("yum");
};
oneSandwich.sayYum();