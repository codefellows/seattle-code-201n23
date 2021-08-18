'use strict';

// global variables
let allGoats = [];
let clicks = 0;
let clicksAllowed = 15;

let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `images/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allGoats.push(this);
}

new Goat('cruisin-goat', 'png');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

console.log(allGoats);

function selectRandGoat() {
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * allGoats.length);
}

function renderGoats()  {
  let goat1 = selectRandGoat();
  let goat2 = selectRandGoat();
  // seriously consider using an array.
  // remember: how do you know if an array includes something?
  // Google it and find out.
  while (goat1 === goat2) {
    goat2 = selectRandGoat();
  }
  image1.src = allGoats[goat1].src;
  image1.alt = allGoats[goat1].name;
  allGoats[goat1].views++;
  image2.src = allGoats[goat2].src;
  image2.alt = allGoats[goat2].name;
  allGoats[goat2].views++;
}

function handleGoatClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++
  let clickedGoat = event.target.alt;
  for (let i = 0; i < allGoats.length; i++) {
    if (clickedGoat === allGoats[i].name) {
      allGoats[i].clicks++;
      break;
    }
  }
  renderGoats();
  if (clicks === clicksAllowed) {
    myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleGoatClick);
  }
}

function handleButtonClick(event) {
  if (clicks === clicksAllowed) {
    renderResults();
  }
}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < allGoats.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${allGoats[i].name} had ${allGoats[i].views} view and was clicked ${allGoats[i].clicks} times.`;
    ul.appendChild(li);
  }
}

renderGoats();

myContainer.addEventListener('click', handleGoatClick);
myButton.addEventListener('click', handleButtonClick);