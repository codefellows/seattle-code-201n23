'use strict';

console.log('hi');

// an object literal:
let oneStudent = {
  name: 'Steve',
  codeClass: 201,
  pronouns: 'they, them',
  onLine: true,
}
console.log(oneStudent);

let studentArray = [];

// a constructor function:
function Student(name, pronouns, codeClass) {
  this.name = name;
  this.pronouns = pronouns;
  this.codeClass = codeClass;
  this.onLine = true;
  this.introduce = function() {
    console.log(`Hi, my name is ${this.name}. My pronouns are ${this.pronouns}.`);
  },
  studentArray.push(this)
}

// to create objects using a constructor is called instantiation
// We are creating instances of an object: 
let juan = new Student('Juan', 'he, him', 201);
let sara = new Student('Sara', 'she, her', 201);
// console.log(juan.introduce());
// console.log(sara.introduce());

for (let i = 0; i < studentArray.length; i++) {
  studentArray[i].introduce();
  // add values from each object together
}

// the keyword 'prototype' allows all the instances 
// of a constructor function to inherrit a new property:
Student.prototype.hairColor = 'black';
console.log(sara);
console.log(juan);

// for some reason just logging the object in Replit  
// doesn't log the hairColor property. But referring  
// to the property directly works
console.log(sara.hairColor);
console.log(juan.hairColor);

Student.prototype.sayHi = function() {
  console.log('hi');
}

sara.sayHi();