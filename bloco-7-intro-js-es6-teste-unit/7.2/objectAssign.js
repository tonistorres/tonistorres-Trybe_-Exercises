// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
// };

// const info = {
//     age: 23,
//     job: 'engenheiro',
// };

// const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */


const person = {
    name: 'Roberto',
};

const lastName = {
    lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }