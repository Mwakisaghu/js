const buttons = document.querySelectorAll('button');
const button = document.querySelector('button');

const buttonClickHandler = (event) => {
  //console.log(event);
  event.target.disabled = true;
  console.log(event);
};

const anotherButtonHandler = () => {
  alert('You clicked this button!');
};

//button.onclick = buttonClickHandler;
//button.onclick = anotherButtonHandler;

const boundFn = buttonClickHandler.bind(this);

//button.addEventListener('click', buttonClickHandler);

/*setTimeout(() => {
  button.removeEventListener('click', buttonClickHandler);
}, 2000);*/

//button.removeEventListener();

/*buttons.forEach((btn) => {
  btn.addEventListener('click', buttonClickHandler);
});

window.addEventListener('scroll', (ev) => {
  console.log(ev);
});*/

const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log(ev);
});

const div = document.querySelector('div');

div.addEventListener(
  'click',
  (ev) => {
    console.log('Clicked DIV');
    console.log(ev);
  },
  true
);

button.addEventListener('click', (ev) => {
  ev.stopPropagation();
  console.log('Clicked Button');
  console.log(ev);
});
