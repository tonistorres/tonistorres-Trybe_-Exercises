//1- Onde eu quero adicionar o elemento DIV?
//2-Como Criar um elemento HTML via JS?
//3-Como alterar as propriedades do elemento criado?
let container=document.getElementById('first');
let newDiv=document.createElement('div');

newDiv.className='circle green small';

container.appendChild(newDiv);
