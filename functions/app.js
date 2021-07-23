const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(1, 5));
console.log(add(12, 15));

const addRandom = (num1) => {
  return num1 + Math.random();
};

console.log(addRandom(5));

let prevResults = 0;

const addMoreNumbers = (num1, num2) => {
  const sum = num1 + num2;
  prevResults = sum;
  return sum;
};

console.log(addMoreNumbers(1, 5));

const hobbies = ['sports', 'reading'];

const printHobbies = (h) => {
  h.push('NEW HOBBY');
  console.log(h);
};

printHobbies(hobbies);
