const {
    addCity,
    removeCity
} = require('./cicles');

describe('testar a funcao cities', () => {
    it('Testando a função de adição de pessoas ', () => {
        expect.assertions(4);
        addCity('Campinas');
        addCity('Goiania');
        addCity('Recife')
        addCity('Ceara');
        expect(cities).toHaveLength(4);
        expect(cities).toContain('Campinas');
        expect(cities).toContain('Goiania');
        expect(cities).toContain('Recife');
        expect(cities).toContain('Ceara');
    });
});