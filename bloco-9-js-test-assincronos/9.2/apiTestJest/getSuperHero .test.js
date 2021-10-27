const {
    getSuperHero,
    getSuperHeroError
} = require('./getSuperHero');



describe('Testando funcao Hero', () => {

    it('Verificando se a função Assincrona esta retornando o valor de forma correta', async () => {
        const hero = await getSuperHero();
        //https://jestjs.io/pt-BR/docs/expect#tobevalue
        // Use .toBe para comparar valores primitivos ou 
        // para verificar a identidade referencial das instâncias do objeto.
        // Ele chama Object.is para comparar valores, o que é ainda melhor para 
        // teste do que o operador de igualdade estrita ===.
        expect(hero).toBe('Wonder Woman');
        //Saída Esperada:Wonder Woman
    });

    it('Verificar quando não é possível acessar esse site, verifique erro digitação', async () => {
        // Criei uma função nova com o mesmo escopo da primeira pra testar o erro 
        // pois modifiquei a url para ocorrer o erro que capturo com o catch 
        // 'erro'
        const error = await getSuperHeroError();
        // https://jestjs.io/pt-BR/docs/expect#tomatchregexp--string
        // Use .toMatch para verificar se uma string corresponde a uma expressão regular.
        // Este "matcher" também aceita uma string, a qual tentará corresponder:
        expect(error).toMatch('erro');
    });

});