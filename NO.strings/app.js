function randomInBetween(min, max) {
  // min 5 ;max 10
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInBetween(1, 10));

//Tagged Templates
function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let pricecategory = 'pretty cheap';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'JavaScript course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`;
console.log(productOutput);
