//const listItemsElements = document.querySelectorAll('li')//
const listItemsElements = document.querySelectorAll('li');

for(const listIItemEl of listItemsElements) {
  console.dir(listIItemEl);
}

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + '(changed!)';

const h1 = document.getElementById('main_title');

h1.textContent = 'Some new text!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const section = document.querySelector('section');
const button = document.querySelector('button');

//section.style.backgroundColor = 'blue';//
section.className = 'red-bg';

button.addEventListener('click', () => {
  if (section.className === 'red-bg visible') {
    section.className = 'red-bg invisible';
  } else {
    section.className = 'red-bg visible';
  }
});

//const list = document.querySelector('ul');
//list.innerHTML = list.innerHTML + '<li>item 4</<li>';

const newLi = document.createElement('li');
newLi.textContent = 'item 5';
