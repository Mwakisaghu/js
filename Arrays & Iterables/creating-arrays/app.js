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


/*const testResults = [1, 5.3, 5, 7.6, 10, 15, 30];
//const storedResults = testResults.slice(2);
const storedResults = testResults.concat([3,99, 2]); //add elemnts to the end of an array

testResults.push(5.91);
console.log(storedResults, testResults);
console.log(testResults.indexOf(5));

const personData = [{name: 'Harry'}, {name: 'codedGenius'}];
console.log(personData.indexOf({name: 'codedGenius'}));

const codedGenius = personData.find((person, id, persons) => {
  return person.name === 'codedGenius';
});
console.log(codedGenius);

const harryIndex = personData.findIndex((person, id, persons) => {
  return person.name === 'Harry';
});

console.log(harryIndex);*/

/*const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustablePrices = [];

/*for (const price of prices) {
  taxAdjustablePrices.push(price * (1 + tax));
};*/

/*prices.forEach((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
  taxAdjustablePrices.push(priceObj);
});

console.log(taxAdjustablePrices); */

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustablePrices = prices.map((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
  return priceObj;
});

//console.log(prices, taxAdjustablePrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

//console.log(sortedPrices.reverse());

console.log(sortedPrices);

const filteredArray = prices.filter((price, idx, prices) => {
  return price > 6; 
});

console.log(filteredArray);