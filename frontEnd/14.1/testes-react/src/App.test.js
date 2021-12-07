import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Loading from './Loading';
import TodoList from './TodoList';
import ValidEmail from './ ValidEmail';


describe('Testando App To Do List',()=>{

  beforeEach(() => {
    render(<TodoList />);
  });


  
  it('TELA LOGIN - Verificar se no componente Loading renderiza o atributo da img alt="Imagem Carregamento Loading"', () => {
    render(<Loading />);
    const logo = screen.getByRole('img', { name: /imagem carregamento loading/i })
    expect(logo).toHaveAttribute('alt', 'Imagem Carregamento Loading');
  })

// só esse méto precisa de assincronismo 
it('ToDo List - Verificando se o elementos ToDo List esta sendo renderizado na tela', async () => {
  const title = await screen.findByText('ToDo List');
  expect(title).toBeInTheDocument();
})

it('Verificar se o campo de email está renderizando na tela', () => {
const inputEmail = screen.getByRole('textbox',{name:'Email:'});
expect(inputEmail).toBeInTheDocument()
})


it('Verificando se um button renderizando na tela', () => {
  const button = screen.getByRole('button',{name:'Add +'});
  expect(button).toBeInTheDocument();
 });

 it('Verificar se um elemento do tipo button com value voltar esta sendo renderizado na tela',() => {

  const btnVoltar = screen.getByRole('button', { name: /voltar/i });
  expect(btnVoltar).toHaveProperty('type','button');
  expect(btnVoltar).toHaveValue('Voltar');
  expect(btnVoltar).toBeInTheDocument();

 })

it('Verificar se o elemento inputEmail é do tipo email',()=>{
const inputEmail = screen.getByRole('textbox', {name:'Email:'});
expect(inputEmail).toHaveProperty('type','email')
})


it('Verificarse o elemento Add + é do tipo button', ()=>{
  const btnAdd=screen.getByTestId('id-add');
  expect(btnAdd).toHaveProperty('type','button');
})

it('Verificando a propriedade value do button Add +',() =>{
  const btnAdd = screen.getByRole('button', {name:'Add +'});
  expect(btnAdd).toHaveValue('Add +');
})

it('Verificar se existe DOIS BUTTONS  no componente React', ()=>{
const buttons = screen.getAllByRole('button');
expect(buttons).toHaveLength(2);
})


it('Teste o Comportamento de Digitar no inputEmail, Clicar no Botão Add +, Email renderiza na tela',() => {
  
  // mock
  const EMAIL_USER='sisvenda2011@gmail.com';

  // ACESSANDO O ELEMENTOS 
  const inputEmail =  screen.getByRole('textbox',{ name:'Email:' });
  const btnAdd = screen.getByRole('button',{ name:'Add +'});
  
  
  userEvent.type(inputEmail,EMAIL_USER);
  userEvent.click(btnAdd);
  // esperado que o campo de input após o click no botão esteja vazio 
  expect(inputEmail).toHaveValue('');
  // esperado que o email digitado no input depois do click do botão seja renderizado no dom 
  expect( screen.queryByText(EMAIL_USER)).toBeInTheDocument();

})

// TESTANDO COMPONENTE
   it('TESTANDO COMPONENTE VALIDA EMAIL, caso o email seja válido.', () => {
        const EMAIL_USER = 'email@email.com';
        render(<ValidEmail email={ EMAIL_USER } />);
        const isValid = screen.getByText('Email Valido');
        expect(isValid).toBeInTheDocument();
      });


      it('TESTANDO COMPONENTE VALIDA EMAIL, caso o email seja inválido.', () => {
        const EMAIL_USER = 'emailerrado';
        render(<ValidEmail email={ EMAIL_USER } />);
        const isValid = screen.getByText('Email Inválido');
        expect(isValid).toBeInTheDocument();
      });



});
