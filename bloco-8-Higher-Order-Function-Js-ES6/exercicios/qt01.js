// Primeiro declaramos uma constante que receberá uma arrow function
// o fullName(nome completo) de uma pessa que será cadastrada
const returnObject = (fullName) => {
    // criamos uma constante com o nome email que receberá o fullName(nome completo) da pessoa passado 
    // por parâmetro. Fazemos logo em seguida o tratamento deste nome recebido por parâmetro 
    // utilizando as seguintes funções 
    // Fonte de Pesquisa:https://www.w3schools;
    // toLowerCase() -  Converte uma String para letras minúsculas
    // split(' ') - Divida uma string em uma matriz de substrings neste caso passando como delimitador 
    // o espaço em branco.
    // join (' - ') - Converte elementos de um array numa string neste caso para junção desses elementos passamos 
    // como parametro para a função o ('_'). 
    const email = fullName.toLowerCase().split(' ').join(' _ ');
    const nomeCompleto = fullName.toUpperCase().trim();
    return {
        fullName,
        email: `${email}@trybe.com`
    };
}
const newEmployees = (callback) => {
    const employees = {
        id1: returnObject('Pedro Guerra'),
        id2: returnObject('Luiza Drumond'),
        id3: returnObject('Carla Paiva')
    }
    return employees;
};
console.log(newEmployees(returnObject));