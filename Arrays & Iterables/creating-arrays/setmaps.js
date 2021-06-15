//WORKING WITH SETS......................................................

/*const ids = new Set(['hello', 'from', 'to']);
ids.add(2)
//console.log(ids.has(2));

//ids.delete('hello');
if (ids.has('hello')) {
  ids.delete('hello');
}

for(const entry of ids.entries()) {
  console.log(entry);
}*/

//WORKING WITH MAPS.......................................................
/*const person1 ={name: 'Harry'};
const person2 = {name: 'codedgenius'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'two weeks earlier', price: 100}]);

console.log(personData);
console.log(personData.get(person1));

for(const entry of personData.entries()) {
  console.log(entry);
};

for(const [key, value] of personData.entries()) {
  console.log(key, value);
};

for(const key of personData.keys()) {
  console.log(key);
};*/

//...............Understanding WeakSet....................................
let person = {name: 'harry'};
const persons = new WeakSet();
persons.add(person);

//person = null;

console.log(persons);

//................understanding WeakMap..................................
const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);