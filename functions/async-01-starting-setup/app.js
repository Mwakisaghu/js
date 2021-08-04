const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (sucess) => {
        resolve(sucess);
      },
      (error) => {},
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  //console.log('Clicked!');
  //navigator.geolocation.getCurrentPosition(
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .then((data) => {
      console.log(data, positionData);
    });
  /*(posData) => {
      setTimer(2000).then((data) => {
        console.log(data, posData);
      });
    },
    (error) => {
      console.log(error);
    }*/
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position ... ');
}

button.addEventListener('click', trackUserHandler);

/*let result = 0;
for (let i = 0; i < 100000000; i++) {
  //result = result + i;
  result += i;
}

console.log(result);*/
