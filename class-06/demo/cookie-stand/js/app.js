'use strict';

console.log('Hello!');


let hours = ['6 a.m.', '7 a.m.', '8 a.m.']; //...


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiePerHour: function() {
    // for loop?
    let custThisHour = this.getRandomCustomer();
    let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
    // console.log('cookiesSoldThisHour: ', cookiesSoldThisHour);
    // push this to an array
  },

  render: function() {
    this.calcCookiePerHour();
    // render the <li>s to the DOM
    // for loop to render the <li>s
    // hours array and the avgCookiesSoldEachHourArray 
  }

}

seattle.render();


