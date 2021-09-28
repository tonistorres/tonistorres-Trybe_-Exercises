// const lesson1 = {
//     materia: 'Matemática',
//     numeroEstudantes: 20,
//     professor: 'Maria Clara',
//     turno: 'manhã',
// };

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

// const lesson3 = {
//     materia: 'Matemática',
//     numeroEstudantes: 10,
//     professor: 'Maria Clara',
//     turno: 'noite',
// };

/**
 * 1-Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */


// lesson2['turno'] = 'noite'; // adiciona uma nova chave

// console.table(lesson2)


const shift = (objeto, chave, valor) => {
    objeto[chave] = valor;
    return objeto
}


console.table(shift(lesson2, "turno", "noite"));