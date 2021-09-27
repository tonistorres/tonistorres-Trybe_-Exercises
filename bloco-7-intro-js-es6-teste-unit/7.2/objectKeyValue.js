/**
 * Após a leitura, veja mais um exemplo de aplicação do Object.keys . Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.
 * 
 * Tente criar uma função que exiba as habilidades do objeto student .
 *  Cada habilidade deve ser exibida no formato "Nome da habilidade,
 *  Nível: valor da chave referente à habilidade"
 */


// const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
// };


// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
// };

// function imprimeHabilidades(object) {
//     for (const key in object) {
//         console.log(`Nome da Habilidade: ${key} Nívle ${ object[key]} `);
//     }
// }
// imprimeHabilidades(student1);


const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
};

console.log('Estudante 1');
listSkills(student1);

//   console.log('Estudante 2');
//   listSkills(student2);