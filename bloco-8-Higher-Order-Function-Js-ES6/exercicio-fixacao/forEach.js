//forEach()
//https://www.youtube.com/watch?v=1YI4_JuDoTU
const meuNomeCompleto=[{nome:'Matheus'},{nome:'Henrique'},{nome:'Castiglioni'}];

// 1º Pecorra o array e fazer o log de todos  o itens do nome
meuNomeCompleto.forEach((item)=>{
//console.log(item);
});
//return: 
//exercicio-fixacao/forEach.js"
// { nome: 'Matheus' }
// { nome: 'Henrique' }
// { nome: 'Castiglioni' }

// 2º logar apenas o valor da propriedade nome de cada objeto de dentro do array
meuNomeCompleto.forEach((item)=>{
  //  console.log(item.nome);
});
// return: 
// Matheus
// Henrique
// Castiglioni

// 3º Qual a posição do index de cada nome dentro do array 
meuNomeCompleto.forEach((item,position)=>{
//console.log(`Position: ${position} Item: ${item.nome}`);
});
// return:
// Position: 0 Item: Matheus
// Position: 1 Item: Henrique
// Position: 2 Item: Castiglioni

//4º Logando cada Nome, Posição e array completo

meuNomeCompleto.forEach((item,position,array)=>{
    console.log(`Item: ${item.nome}`);
    console.log(`Position: ${position}`);
    console.log(`Array: ${array}`)
});
