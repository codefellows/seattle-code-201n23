'use strict';


// global varriables
let allGoats = [];

let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let clicks = 0;
let clickAllowed = 3;

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `images/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allGoats.push(this);
}

function selectRandomGoat() {
  return Math.floor(Math.random() * allGoats.length);
}
function renderGoats() {
  // call the selectRandomGoat
  let goat1 = selectRandomGoat();
  let goat2 = selectRandomGoat();
  // push goat values into an array
  // google MDN array has value
  while (goat1 === goat2) {
    goat2 = selectRandomGoat();
  }
  image1.src = allGoats[goat1].src;
  image2.src = allGoats[goat2].src;
  image1.alt = allGoats[goat1].name;
  image2.alt = allGoats[goat2].name;
  allGoats[goat1].views++;
  allGoats[goat2].views++;
}

function handleGoatClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickGoat = event.target.alt;
  console.log(clickGoat);
  for (let i = 0; i < allGoats.length; i++) {
    if (clickGoat === allGoats[i].name) {
      allGoats[i].clicks++;
      break;
    }
  }
  renderGoats();
  if (clicks === clickAllowed) {
    myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleGoatClick);
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

new Goat('cruisin-goat', 'png');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

console.log(allGoats);
renderGoats();

myContainer.addEventListener('click', handleGoatClick);
myButton.addEventListener('click', renderResults);

