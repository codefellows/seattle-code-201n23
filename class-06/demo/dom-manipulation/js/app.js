'use strict';

console.log('Hello World');

const profileContainer = document.getElementById('kittenProfiles');

console.log(profileContainer);

// 1. create an element
let article = document.createElement('article');

// 2. give it content // this will happen later

// 3. append it to the DOM
profileContainer.appendChild(article);

// headline h3:
let h3 = document.createElement('h3');
h3.textContent = 'Jumper';
article.appendChild(h3);

// paragraph
let p = document.createElement('p');
p.textContent = 'Jumper is really cute!'
article.appendChild(p);

// ul
let ul = document.createElement('ul');
ul.id = 'jumperLikes';
article.appendChild(ul);

// image
let img = document.createElement('img');
img.src = 'images/jumper.jpeg';
img.alt = "Jumper is available for adoption.";
article.appendChild(img);



let jumper = {
  name: 'Jumper',
  like: ['cuddling', 'lazer pointers', 'catnip'],
  render: function() {
    for (let i = 0; i < this.like.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} like ${this.like[i]}`;
      ul.appendChild(li);
    }
  }
}
jumper.render();

