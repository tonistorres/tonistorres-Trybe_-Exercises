const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};


/**
 * 1-Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
const shift = (objeto, chave, valor) => {
    objeto[chave] = valor;
    return objeto
}
console.table(shift(lesson2, "turno", "noite"));