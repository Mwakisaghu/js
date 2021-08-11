const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

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

fetchPosts();
createPost('DUMMY', 'A dummy post!');
