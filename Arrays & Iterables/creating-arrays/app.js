/*const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['cooking', 'sports'];
const personalData = ['22', 'Harry', {moreDetails: []}];

const analyticsData = [[1, 1.6], [-5.4, 6.1]];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
};

console.log (personalData[1]); */

const hobbies = ['cooking', 'sports'];
hobbies.push('reading');
hobbies.unshift('coding'); //adds an item to the array
const poppedValue = hobbies.pop(); //removing elements
hobbies.shift(); // shifts all elements in the array one place to the left---first elemnt gets dropped
console.log(hobbies);

hobbies[1] = 'Coding'
console.log(hobbies);