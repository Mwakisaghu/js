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

const entryTextSection = document.getElementById('entry-text');

const deleteMovieModal = document.getElementById('delete-modal');

const movies =[];

const updateUi = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  //listRoot.removeChild(listRoot.children[movieIndex]);
};

const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  //deleteMovie();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</P>
  </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieDeletionModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearUserInputs = () => {
  for (usrInputs of userInputs) {
    usrInputs.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieDeletionModal();
  clearUserInputs();
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

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieDeletionModal();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUi();
};

const backdropClickHandler = () => {
  toggleBackdrop();
  clearUserInputs();
  closeMovieDeletionModal();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
