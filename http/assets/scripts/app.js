const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequests(method, url, data) {
  const xhr = new XMLHttpRequest();
  const promise = new Promise((resolve, reject) => {
    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = function () {
      resolve(xhr.response);
      //console.log(xhr.response);
      //const listsOfPosts = JSON.parse(xhr.response);
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequests(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  );
  const listsOfPosts = responseData;
  for (const post of listsOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    postEl.querySelector('li').id = post.id;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequests('POST', 'https://jsonplaceholder.typicode.com/posts');
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const enteredTitle = ev.currentTarget.querySelector('#title').value;
  const enteredContent = ev.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'BUTTON') {
    const postId = ev.target.closest('li').id;
    sendHttpRequests(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
