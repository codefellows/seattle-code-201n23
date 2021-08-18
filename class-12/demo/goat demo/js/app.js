'use strict';

// global variables
let allGoats = [];
let clicks = 0;
let clicksAllowed = 15;
let numberOfUniqueIndexes = 4;

let myContainer = document.querySelector('section');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let indexArray = [];

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

// .pop() - removes last item
// .push() - append to the end of an array
// .shift() - removes the first item
// .unshift() - add to the beginning of an array

function renderGoats() {
  while (indexArray.length < numberOfUniqueIndexes) {
    let randomNumber = selectRandGoat();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    }
  }
  // console.log(indexArray);
  let goat1 = indexArray.shift();
  let goat2 = indexArray.shift();
  // console.log(indexArray);
  // // seriously consider using an array.
  // // remember: how do you know if an array includes something?
  // // Google it and find out.
  // while (goat1 === goat2) {
  //   goat2 = selectRandGoat();
  // }
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
    myContainer.removeEventListener('click', handleGoatClick);
    renderChart();
  }
}

// function handleButtonClick(event) {
//   if (clicks === clicksAllowed) {
//     renderResults();
//   }
// }



renderGoats();


function renderChart() {
  let goatClicks = [];
  let goatViews = [];
  let goatNames = [];
  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name);
    goatClicks.push(allGoats[i].clicks);
    goatViews.push(allGoats[i].views);
  }
  //console.log(goatClicks);
  let chartObject = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Views',
        data: goatViews,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: '# of Clicks',
        data: goatClicks,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, chartObject);
}


myContainer.addEventListener('click', handleGoatClick);
