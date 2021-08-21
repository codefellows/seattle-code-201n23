// a local coffee shop wants our help to build a simple application they can use to record customer order and maintain a record of what has been order (for any periodd of time any amount of time)

// create a very simple app that has two components
// - get orders via a FORM
// - display orders via a UL

'use strict';

// ---------- Global variables ------------- //
let drinkOrders = [];
const orderForm = document.querySelector('form');
const resultList = document.querySelector('ul');

// ---------- Constructor function ------------- //

function Drink(name, drinkType, milk, size) {
  this.name = name;
  this.drinkType = drinkType;
  this.milk = milk;
  this.size = size;
}

Drink.prototype.renderDrink = function() {
  // create element (LI)
  let li = document.createElement('li');
  // give it some content
  // ex: Sheyna ordered a 12oz tea with whole milk
  li.textContent = `${this.name} ordered a ${this.size} oz ${this.drinkType} with ${this.milk} milk.`
  // append it to the parent
  resultList.appendChild(li);
}

// ---------- Global functions ------------- //

function makeADrink(name, drinkType, milk, size) {
  // run the drink through the Drink constructor
  let drinkObj = new Drink(name, drinkType, milk, size);
  // push the new Drink instance to a the drinkOrders array
  drinkOrders.push(drinkObj);
  // render that drink as an li
  drinkObj.renderDrink();
  console.log(drinkObj);
}

function storeADrink() {
  // 'orders' is our KEY
  // turn our data into a string
  console.log(drinkOrders);
  // stringifiedOrders will be a string
  let stringifiedOrders = JSON.stringify(drinkOrders);
  console.log(stringifiedOrders);
  localStorage.setItem('orders', stringifiedOrders);
}

// reinstanciation — turn the plain old javascript object (POJO) into an instance of a contstructor. 

function getDrinks() {
  // check if there are drinks (KEY: orders) in storage
  let potentialOrders = localStorage.getItem('orders');
  console.log(potentialOrders);
  // if there are drinks do this:
  if (potentialOrders) {
    // take potential orders and turn it back into an array of objects
    // (PAIN OLD JAVASCRIPT OBJECTS)
    let parsedOrders = JSON.parse(potentialOrders);
    console.log(parsedOrders);
    // run it back through the Drink constructor function - REINSTANTIATE
    for (let order of parsedOrders) {
      // extract the values out of each object
      let name = order.name;
      let drinkType = order.drinkType;
      let milk = order.milk;
      let size = order.size;
      makeADrink(name, drinkType, milk, size);
    }
    // // SAME AS:
    // for (let i = 0; i < parsedOrders.length; i++) {
    //   // parsedOrders[i].name
    // }
  }
  // if there are not drinks do this: NOTHING
}

// ---------- Event Handler ------------- //

function handleSubmit(e) {
  e.preventDefault();
  let customerName = e.target.name.value;
  let drinkType = e.target.drink.value;
  let drinkMilk = e.target.milk.value;
  let drinkSize = e.target.drinkSize.value;
  makeADrink(customerName, drinkType, drinkMilk, drinkSize);
  storeADrink();
  orderForm.reset();
}

// Executiable code:
// ---------- Event listener ------------- //

orderForm.addEventListener('submit', handleSubmit);
getDrinks();


// two other methods for local storage
// localStorage.clear(); — deletes everything from local storage
// localStorage.removeItem(KEY) - delete one key/value pair from local storage