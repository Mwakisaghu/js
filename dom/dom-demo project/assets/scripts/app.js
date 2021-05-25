const addMovieModal = document.getElementById('add-modal');
//const addMovemodal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

//const startAddMovieButton = document.querySelector('header').lastElementChild;
const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = document.querySelector('.btn--passive');
//const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
//const confirmAddMovieButton = document.querySelector('.btn--success');

const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieModal.getElementsByTagName('input');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (titleValue.trim() === [0] || 
  imageUrlValue.trim() === '' || 
  ratingValue.trim() === '' || 
  +ratingValue < 1 ||
  +ratingValue > 5 
  ) {
    alert('Please enter valid valuues (rating between 1 and 5)');
  }
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
