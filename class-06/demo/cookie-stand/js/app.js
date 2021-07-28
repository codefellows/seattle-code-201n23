'use strict';

console.log('Hello!');


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

}

let rand = seattle.getRandomCustomer();

console.log(seattle.getRandomCustomer())