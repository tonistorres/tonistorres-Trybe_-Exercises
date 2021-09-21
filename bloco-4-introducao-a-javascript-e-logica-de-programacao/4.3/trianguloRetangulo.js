


/*

                    DEMONSTRATIVO DE UMA MATRIZ        

                  C 1    C 2     C 3    C 4   C 5
                |------|------|------|------|------|
            L 5 |   *  |      |      |      |      | 
                |      |      |      |      |      | 
                |------|------|------|------|------| 
                |   *  |  *   |      |      |      | 
            L 4 |      |      |      |      |      | 
                |------|------|------|------|------|
                |    * |  *   |  *   |      |      | 
            L 3 |      |      |      |      |      | 
                |------|------|------|------|------|
                |   *  |  *   |   *  |  *   |      | 
            L 2 |      |      |      |      |      | 
                |------|------|------|------|------|
                |      |      |      |      |      | 
            L 1 |   *  |  *   |  *   |   *  |  *   | 
                |------|------|------|------|------|
                  i=0     i=1   i=2    i=3     i=4

*/

var qtzinesAndColumnHeadquarters = 5; // representa a quantidade de linhas e colunas da matriz 
var containerSymbol = '';//container onde írá conter os simbolo a ser impresso 
var symbol='*'; //o simbolo a ser impresso 

for (let iLinha = 0; iLinha < qtzinesAndColumnHeadquarters; iLinha += 1) {

    if (iLinha < 1) {
        for (let iColuna = 0; iColuna < qtzinesAndColumnHeadquarters; iColuna += 1) {

            containerSymbol += symbol;
            console.log(containerSymbol);
        }
    }
}
