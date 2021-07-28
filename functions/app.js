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

//Factory functions --function that produces another another function.
let multiplier = 1.1;

const createTaxCalc = (tax) => {
  const calculateTax = (amount) => {
    return amount * tax * multiplier;
  };
  return calculateTax;
};

const calculateVatAmount = createTaxCalc(0.16);
const calculateIncomeAmount = createTaxCalc(0.25);

//multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

//const vatAmount = calculateTax(100, 0.16);
//const incomeTax = calculateTax(100, 0.25);

//practicing closures in detail
let userName = 'Harry';

const greetUser = () => {
  let name = userName
  console.log('Hi ' + name);
};

userName = 'codedGenius';

greetUser();
