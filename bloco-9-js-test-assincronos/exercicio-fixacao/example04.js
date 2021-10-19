// aqui temos um array de objetos, logo, de cara podemos utilizar uma 
// hof para passear por ele e buscar o calor de cada propriedade
// De acordo como problema constituído pelo course a const myExpenses 
// representa os gastos de uma pessoa num dado mês 
const myExpenses = [{
        gym: 99,
    },
    {
        ifood: 200,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];
// aqui temos uma constante que recebe em sua estrutura referencial o
// valor numérico 1000
// A segunda constante representa o recebimento daquela pessoa num dados 
// mês 
const myIncome = 1000;

// aqui temos uma função que representa o orçamento mensal month Budget   
// uma arrow function que recebe como parameter myIncome (minha renda)
// my Expense (minha despesa) e uma callback que irá fazer o calculo 
// propriamente dito  
const monthlyBudget = (myIncome, myExpenses, callback) => {

    // Total das despesas é o calculo 
    const totalExpenses = callback(myExpenses);
    const totalAfterExpenses = myIncome - totalExpenses;

    // aqui montamos o extrato de receita e despesa 
    console.log(`Balanço do mês:
      Recebido: R$${myIncome},00
      Gasto: R$${totalExpenses},00
      Saldo: R$${totalAfterExpenses},00 `);
};


function seachArrayObject(array) {
    const resultSeach = array.map((item) => Object.values(item));
   // resultSeach.reduce((acc, [, curr]) => acc.concat([curr]), []);
    return resultSeach;
}

console.log(seachArrayObject(myExpenses));