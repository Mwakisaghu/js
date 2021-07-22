const buttons = document.querySelectorAll('button');

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

buttons.forEach((btn) => {
  btn.addEventListener('click', buttonClickHandler);
});
