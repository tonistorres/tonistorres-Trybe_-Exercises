/**
 * Imagine um cenário em que você precisa completar as informações do
 * cliente adicionando uma nova propriedade para armazenar seu sobrenome.
 *  
 * Uma das formas já vistas até então é reescrever o objeto,
 * dessa vez já com a nova propriedade lastName . */

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// const customer = {
//     firstName: 'Roberto',
//     lastName: 'Faria', // Propriedade adicionada.
//     age: 22,
//     job: 'Teacher',
// };
/**
 * 
 * Existem também outras formas de adicionar essa propriedade de maneira muito mais simples e prática, sem a necessidade de reescrever o objeto e suas propriedades.
 */


// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

//1ª FORMA DE FAZER 
let newKey = 'lastName'; //criando uma variável para receber o nome ou chave da propriedade a ser acrescentada no obj
const lastName = 'Ferreira'; //atribuindo valor a chave criada 
customer[newKey] = lastName; //acrescentado a chave e o valor da chave ao objeto 

//2ª FORMA DE FAZER 
newKey = 'fullName'; //cria-se uma variável e atribui um valor que será o nome da propriedade a ser add no obj
const fullName = `${customer.firstName} ${customer.lastName}`; //add a propriedade o seu valor 
customer[newKey] = fullName; //agora adiciona ao objeto 
console.log(customer);