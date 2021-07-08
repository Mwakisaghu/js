class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Harry';

  constructor() {
    super();
    this.age = 22;
  }

  greet = () => {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
    );
  }
}

/*greet() {
  console.log(
    'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
  );
}*/


/*function Person() {
  this.name = 'Harry';
  this.age = 22;
  this.greet = function () {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
    );
  };
}

Person.describe = function () {
  console.log('Creating persons...');
};

const person = new Person();
person.greet();
console.log(person.__proto__);
//console.log(person.toString());
console.log(Object);*/

const person = new Person();
person.greet();
console.log(person);

const button = document.getElementById('btn');
button.addEventListener('click', person.greet);