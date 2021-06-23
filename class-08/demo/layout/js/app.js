'use strict';

function Cat(breed, eyeColor) {
  this.breed = breed;
  this.eyeColor = eyeColor;
}

Cat.prototype.chaseLaserPointer = function () {
  console.log('run around!!!!!!');
};

function Kitten(name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {
  this.name = name;
  this.age = this.getAge();
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
}

Kitten.prototype = new Cat();

Kitten.prototype.getAge = function () {
  this.age = randomAge(3, 12) + ' months';
};

Kitten.prototype.meow = function () {
  console.log('meow!');
};

Kitten.prototype.render = render;


var frankie = new Kitten('frankie', ['cuddling', 'chasing string', 'catnip'], true, false, true);
frankie.getAge();
frankie.meow();
frankie.render();

var serena = new Kitten('serena', ['sitting on laps', 'climbing curtains', 'eating treats'], true, null, true);
serena.getAge();
serena.render();


var jumper = new Kitten('jumper', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true);
jumper.getAge();
jumper.eyeColor = 'green';
jumper.render();

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function render() {
  let parentElement = document.getElementById('kittenProfiles');

  let article = document.createElement('article');
  parentElement.appendChild(article);

  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  let p = document.createElement('p');
  p.textContent = this.name + ' is adorable, and is ' + this.age + ' old.';
  article.appendChild(p);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < this.interests.length; i++) {
    let li = document.createElement('li');
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }


  const table = document.createElement('table');

  const row1 = document.createElement('tr');
  const row2 = document.createElement('tr');

  const th1 = document.createElement('th');
  th1.textContent = 'Good With Kids';
  const th2 = document.createElement('th');
  th2.textContent = 'Good With Dogs';
  const th3 = document.createElement('th');
  th3.textContent = 'Good With Other Cats';

  const td1 = document.createElement('td');
  td1.textContent = this.isGoodWithKids;
  const td2 = document.createElement('td');
  td2.textContent = this.isGoodWithDogs;
  const td3 = document.createElement('td');

  td3.textContent = this.isGoodWithOtherCats;

  row1.appendChild(th1);
  row1.appendChild(th2);
  row1.appendChild(th3);

  row2.appendChild(td1);
  row2.appendChild(td2);
  row2.appendChild(td3);

  table.appendChild(row1);
  table.appendChild(row2);
  article.appendChild(table);



  const img = document.createElement('img');

  img.setAttribute('src', 'images/' + this.name + '.jpeg');
  img.setAttribute('alt', 'cute picture of ' + this.name + ', who is an orange and white cat. You should really adopt him.');
  article.appendChild(img);
}
