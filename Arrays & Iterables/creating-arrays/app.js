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

/*const hobbies = ['cooking', 'sports'];
hobbies.push('reading');
hobbies.unshift('coding'); //adds an item to the array
const poppedValue = hobbies.pop(); //removing elements
hobbies.shift(); // shifts all elements in the array one place to the left---first elemnt gets dropped
console.log(hobbies);

hobbies[1] = 'Coding'
console.log(hobbies);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

const removedElements = hobbies.splice(0, 1); // removes the an element
console.log(hobbies);*/


const testResults = [1, 5.3, 5, 7.6, 10, 15, 30];
const storedResults = testResults.slice(2);

testResults.push(5.91);
console.log(storedResults, testResults);