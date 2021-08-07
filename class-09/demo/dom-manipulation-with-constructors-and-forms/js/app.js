'use strict';

let kittenArray = [];

// turning it into a constructor function:
function Kitten(name, about, ageInMonths, src, alt, like) {
  this.name = name;
  this.about = about;
  this.ageInMonths = ageInMonths;
  this.src = src;
  this.alt = alt;
  this.like = like;
  this.listId = `${this.name}Likes`;
  this.renderList = function() {
    //console.log("render list runs");
    let kittenLikes = document.getElementById(this.listId);
    for (let i = 0; i < this.like.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} like ${this.like[i]}`;
      kittenLikes.appendChild(li);
    }
  },
  kittenArray.push(this);
}

Kitten.prototype.render = function() {
  // render the article
  const profileContainer = document.getElementById('kittenProfiles');
  // article
  let article = document.createElement('article');
  profileContainer.appendChild(article);
  // headline h3:
  let h3 = document.createElement('h3');
  h3.textContent = this.name;
  article.appendChild(h3);
  // paragraph
  let ageP = document.createElement('p');
  ageP.textContent = `${this.ageInMonths} months old`;
  article.appendChild(ageP);
  // paragraph
  let p = document.createElement('p');
  p.textContent = this.about;
  article.appendChild(p);
  // ul
  let ul = document.createElement('ul');
  ul.id = this.listId;
  article.appendChild(ul);
  // image
  let img = document.createElement('img');
  img.src = this.src;
  img.alt = this.alt;
  article.appendChild(img);
  // fill in the <ul> with <li>s:
  this.renderList();
};

// // can also write the below as
// let jumper = new Kitten(
//   'Jumper',
//   'Jumper is really cute!',
//   'images/jumper.jpeg',
//   'Jumper is available for adoption',
//   ['cuddling', 'lazer pointers', 'catnip']
// )

// instanciate the Kitten objects
new Kitten(
  'Jumper',
  'Jumper is really cute!',
  5,
  'images/jumper.jpeg',
  'Jumper is available for adoption',
  ['cuddling', 'lazer pointers', 'catnip']
);
new Kitten(
  'Serena',
  'Serena is a sweet kitty',
  4,
  'images/serena.jpeg',
  'adopt Serena',
  ['string', 'feathers', 'soft beds']
);
new Kitten(
  'Frankie',
  'Frankie is adorable, and is 3 months old.',
  3,
  'images/frankie.jpeg',
  'Frankie is available for adoption',
  ['naps', 'treats', 'cat tree']
);
// frankie.render();
// jumper.render();
// serena.render();

//console.log(kittenArray);

const kittenTable = document.querySelector('tbody');

Kitten.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  kittenTable.appendChild(tr);
  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  tr.appendChild(tdName);
  for (let i = 0; i < this.like.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.like[i];
    tr.appendChild(td);
  }
};
// frankie.renderTable();
// jumper.renderTable();
// serena.renderTable();

// stand-alone function that invokes all the render methods I want.
// because I no longer need the individual render methods invoked, I have commented them out above.
// And since I am no longer referring to the Kitten objects by their variable names, I could remove them from when I am instanciating them if I want.
function renderAll() {
  for (let i = 0; i < kittenArray.length; i++) {
    kittenArray[i].render();
    kittenArray[i].renderTable();
    // add something together here????
  }
}
renderAll();

// ADD KITTEN FORM
let kittenForm = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  let kittenName = event.target.kittenName.value;
  let about = event.target.about.value;
  let imageURL = event.target.imageURL.value;
  let imageAlt = event.target.imageAlt.value;
  let ageInMonths = parseInt(event.target.ageInMonths.value);
  let kittenFavs = [
    event.target.fav1.value,
    event.target.fav2.value,
    event.target.fav3.value
  ];
  let newKitty = new Kitten(
    kittenName,
    about,
    ageInMonths,
    imageURL,
    imageAlt,
    kittenFavs
  );
  console.log(newKitty);
  newKitty.renderTable();
  newKitty.render();
}


kittenForm.addEventListener('submit', handleSubmit);
