/**
 * No exemplo acima, você viu que há diferentes formas de associar chaves e valores a um objeto.
Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um OBJETO, o NOME DE UMA CHAVE e o seu VALOR. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
 */


const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};


function addPropertyObject(object, nameKey, valueKey) {

    let newKey = nameKey;
    nameKey = valueKey;
    object[newKey] = nameKey;
    return object;
}

console.log(addPropertyObject(customer, 'lastName', 'Ferreira'));