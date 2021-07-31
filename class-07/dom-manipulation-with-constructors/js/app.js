'use strict';

//console.log('Hello World');




// // object literal:
// let jumper = {
//   name: 'Jumper',
//   like: ['cuddling', 'lazer pointers', 'catnip'],
//   about: 'Jumper is really cute.',
//   src: 'images/jumper.jpeg',
//   alt: 'Jumper is available for adoption.',
//   listId: `${this.name}Likes`,
//   render: function() {
//     // render the article
//     const profileContainer = document.getElementById('kittenProfiles');

//     // article
//     let article = document.createElement('article');
//     profileContainer.appendChild(article);

//     // headline h3:
//     let h3 = document.createElement('h3');
//     h3.textContent = this.name;
//     article.appendChild(h3);

//     // paragraph
//     let p = document.createElement('p');
//     p.textContent = this.about;
//     article.appendChild(p);

//     // ul
//     let ul = document.createElement('ul');
//     ul.id = this.listId;
//     article.appendChild(ul);

//     // image
//     let img = document.createElement('img');
//     img.src = this.src;
//     img.alt = this.alt;
//     article.appendChild(img);

//     // fill in the <ul> with <li>s:
//     this.renderList();
//   },
//   renderList: function() {
//     //console.log("render list runs");
//     let kittenLikes = document.getElementById(this.listId);
//     for (let i = 0; i < this.like.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${this.name} like ${this.like[i]}`;
//       kittenLikes.appendChild(li);
//     }
//   }
// }
// jumper.render();
 
let kittenArray = [];

// turning it into a constructor function:
function Kitten(name, about, src, alt, like) {
  this.name = name;
  this.about = about;
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
  kittenArray.push(this)
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
// new Kitten(
//   'Jumper', 
//   'Jumper is really cute!', 
//   'images/jumper.jpeg', 
//   'Jumper is available for adoption', 
//   ['cuddling', 'lazer pointers', 'catnip']
// )

// instanciate the Kitten objects
let jumper = new Kitten(
  'Jumper', 
  'Jumper is really cute!', 
  'images/jumper.jpeg', 
  'Jumper is available for adoption', 
  ['cuddling', 'lazer pointers', 'catnip']
);
let serena = new Kitten(
  'Serena', 
  'Serena is a sweet kitty', 
  'images/serena.jpeg', 
  'adopt Serena', 
  ['string', 'feathers', 'soft beds']
);
let frankie = new Kitten(
  'Frankie',
  'Frankie is adorable, and is 12 months old.',
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
}
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