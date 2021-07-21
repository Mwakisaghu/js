const button = document.querySelector('button');

const buttonClickHandler = () => {
  alert('This button was clicked!');
};

const anotherButtonHandler = () => {
  alert('You clicked this button!');
};

//button.onclick = buttonClickHandler;
//button.onclick = anotherButtonHandler;

//const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', () => {
  console.log('Clicked!');
});

setTimeout(() => {
  button.removeEventListener('click', () => {
    console.log('Clicked!');
  });
}, 2000);

//button.removeEventListener();
