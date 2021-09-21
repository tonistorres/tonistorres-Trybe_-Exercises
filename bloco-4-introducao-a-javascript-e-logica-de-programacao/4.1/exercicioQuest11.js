
//Exercício calculando Inss de um contribuinte e o Imposto de renda com linguagem de programação javaScript 


let desINSS;
let descIR;
let salarioBruto = 2500;
let salarioLiquido;
let salarioBse;
const tabela075PorCento = 142.80;
const tabela15PorCento = 354.80;
const tabela225PorCento = 636.13;
const tabela275PorCento = 869.36;

//salario Liquido Procurado 
salarioLiquido = salarioBruto - (desINSS + descIR);


//INSS
if (salarioBruto <= 1556.95) {

    console.log('-----------------------------');
    console.log('-----Extrato Contribuinte----')
    console.log('-----------------------------');
    console.log('Salario Bruto:' + salarioBruto.toFixed(2));
    desINSS = salarioBruto * 0.08;
    salarioBse = salarioBruto - desINSS;
    console.log('-----------------------------');
    console.log('Desconto INSS :', desINSS.toFixed(2));
    console.log('-----------------------------');
    console.log('Salário Base: ', salarioBse.toFixed(2));
    console.log('-----------------------------');


    //IMPOSTO DE RENDA INSENCAO
    if (salarioBse <= 1903.98) {

        descIR = 0;
        console.log('CONTRIBUINTE ISENTO IMPOSTO DE RENDA')
        console.log('-----------------------------');
        salarioLiquido = salarioBse;
        console.log('Salario Líquido :', salarioLiquido.toFixed(2));
        console.log('-----------------------------');
    }

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {

    console.log('-----------------------------');
    console.log('-----Extrato Contribuinte----');
    console.log('Salário Bruto :', salarioBruto.toFixed(2));
    desINSS = salarioBruto * 0.09;
    salarioBse = salarioBruto - desINSS;
    console.log('-----------------------------');
    console.log('Desconto INSS :', desINSS.toFixed(2));
    console.log('-----------------------------');
    console.log('Salário Base: ', salarioBse.toFixed(2));
    console.log('-----------------------------------------------------------');

    //IMPOSTO DE RENDA INSENCAO
    if (salarioBse <= 1903.98) {

        descIR = 0;
        console.log('CONTRIBUINTE ISENTO IMPOSTO DE RENDA')
        console.log('-----------------------------------------------------------');
        salarioLiquido = salarioBse;
        console.log('Salario Líquido :', salarioLiquido.toFixed(2));
        console.log('-----------------------------------------------------------');



    }


    //calculando imposto de renda a partir do salario base 
    if (salarioBse >= 1903.99 && salarioBse <= 2826.65) {

        descIR = (salarioBse * 0.075) - tabela075PorCento;
        console.log('CONTRIBUINTE PARTICIPA DA FAIXA 1 IMPOSTO DE RENDA-', tabela075PorCento.toFixed(2));
        console.log('-----------------------------------------------------------');
        console.log('Desconto Imposto de Renda : ', descIR.toFixed(2));
        console.log('-----------------------------------------------------------');
        salarioLiquido = salarioBse - descIR;
        console.log('Salario Liquido :', salarioLiquido.toFixed(2));
        console.log('-----------------------------------------------------------');

    }


}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {

    //INSS
    console.log('-----------------------------');
    console.log('-----Extrato Contribuinte----');
    console.log('Salário Bruto :', salarioBruto.toFixed(2));
    desINSS = salarioBruto * 0.11;
    salarioBse = salarioBruto - desINSS;
    console.log('-----------------------------');
    console.log('Desconto INSS :', desINSS.toFixed(2));
    console.log('-----------------------------');
    console.log('Salário Base: ', salarioBse.toFixed(2));
    console.log('-----------------------------------------------------------');

    //IMPOSTO DE RENDA - FAIXA 1
    if (salarioBse >= 1903.99 && salarioBse <= 2826.65) {

        descIR = (salarioBse * 0.075) - tabela075PorCento;
        console.log('CONTRIBUINTE PARTICIPA DA FAIXA 1 IMPOSTO DE RENDA-', tabela075PorCento.toFixed(2));
        console.log('-------------------------------------------------------------');
        console.log('Desconto Imposto de Renda : ', descIR.toFixed(2));
        console.log('-------------------------------------------------------------');
        salarioLiquido = salarioBse - descIR;
        console.log('Salario Liquido :', salarioLiquido.toFixed(2));
        console.log('-------------------------------------------------------------');

    }

    //IMPOSTO DE RENDA - FAIXA 2
    if (salarioBse >= 2826.66 && salarioBse <= 3751.05) {

        descIR = (salarioBse * 0.15) - tabela15PorCento;
        console.log('CONTRIBUINTE PARTICIPA DA FAIXA 2 -', tabela15PorCento.toFixed(2));
        console.log('-----------------------------------------------------------');
        console.log('Desconto Imposto de Renda : ', descIR.toFixed(2));
        console.log('-----------------------------------------------------------');
        salarioLiquido = salarioBse - descIR;
        console.log('Salario Liquido :', salarioLiquido.toFixed(2));
        console.log('-----------------------------------------------------------');

    }


    //IMPOSTO DE RENDA - FAIXA 3
    if (salarioBse >= 3751.06 && salarioBse <= 4664.68) {

        descIR = (salarioBse * 0.225) - tabela225PorCento;
        console.log('CONTRIBUINTE PARTICIPA DA FAIXA 3 IMPOSTO DE RENDA-', tabela225PorCento.toFixed(2));
        console.log('-------------------------------------------------------------');
        console.log('Desconto Imposto de Renda : ', descIR.toFixed(2));
        console.log('-------------------------------------------------------------');
        salarioLiquido = salarioBse - descIR;
        console.log('Salario Liquido :', salarioLiquido.toFixed(2));
        console.log('-------------------------------------------------------------');

    }


} else if (salarioBruto > 5189.82) {

    //INSS
    console.log('-----------------------------');
    console.log('-----Extrato Contribuinte----');
    console.log('Salário Bruto :', salarioBruto.toFixed(2));
    desINSS = 570.88;
    salarioBse = salarioBruto - desINSS;
    console.log('-----------------------------');
    console.log('Desconto INSS :', desINSS.toFixed(2));
    console.log('-----------------------------');
    console.log('Salário Base: ', salarioBse.toFixed(2));
    console.log('-----------------------------------------------------------');


    //IMPOSTO DE RENDA - FAIXA 3
    if (salarioBse >= 3751.06 && salarioBse <= 4664.68) {

        descIR = (salarioBse * 0.225) - tabela225PorCento;
        console.log('CONTRIBUINTE PARTICIPA DA FAIXA 3 IMPOSTO DE RENDA-', tabela225PorCento.toFixed(2));
        console.log('-------------------------------------------------------------');
        console.log('Desconto Imposto de Renda : ', descIR.toFixed(2));
        console.log('-------------------------------------------------------------');
        salarioLiquido = salarioBse - descIR;
        console.log('Salario Liquido :', salarioLiquido.toFixed(2));
        console.log('-------------------------------------------------------------');

    }

    //IMPOSTO DE RENDA - FAIXA 4
    if (salarioBse > 4664.68) {

        descIR = (salarioBse * 0.275) - tabela275PorCento;
        console.log('CONTRIBUINTE PARTICIPA DA FAIXA 4 -', tabela275PorCento.toFixed(2));
        console.log('-----------------------------------------------------------');
        console.log('Desconto Imposto de Renda : ', descIR.toFixed(2));
        console.log('-----------------------------------------------------------');
        salarioLiquido = salarioBse - descIR;
        console.log('Salario Liquido :', salarioLiquido.toFixed(2));
        console.log('-----------------------------------------------------------');

    }
}
