const button = document.querySelector('button');

const buttonClickHandler = () => {
  alert('This button was clicked!');
};

const anotherButtonHandler = () => {
  alert('You clicked this button!');
};

//button.onclick = buttonClickHandler;
//button.onclick = anotherButtonHandler;

const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 2000);

//button.removeEventListener();
