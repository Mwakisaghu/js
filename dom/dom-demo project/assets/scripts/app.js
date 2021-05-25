const addMovieModal = document.getElementById('add-modal');
//const addMovemodal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

//const startAddMovieButton = document.querySelector('header').lastElementChild;
const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = document.querySelector('.btn--passive');
//const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
//const addCancelMovieButton = document.querySelector('.btn--success');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

/*const addCancelMovie = () => {
  toggleMovieModal();
};*/

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click',toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
//addCancelMovieButton.addEventListener('click', addCancelMovie);
