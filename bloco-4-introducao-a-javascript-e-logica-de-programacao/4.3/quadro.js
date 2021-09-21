/*

                    DEMONSTRATIVO DE UMA MATRIZ        

                  C 1    C 2     C 3    C 4   C 5
                |------|------|------|------|------|
            L 5 |      |      |      |      |      | 
                |   *  |    * |   *  |  *   |   *  | 
                |------|------|------|------|------| 
                |   *  |   *  |   *  |   *  |   *  | 
            L 4 |      |      |      |      |      | 
                |------|------|------|------|------|
                |   *  |   *  |  *   |   *  |  *   | 
            L 3 |      |      |      |      |      | 
                |------|------|------|------|------|
                |   *  |  *   |   *  |  *   |   *  | 
            L 2 |      |      |      |      |      | 
                |------|------|------|------|------|
                |    * |  *   |  *   |  *   |  *   | 
            L 1 |      |      |      |      |      | 
                |------|------|------|------|------|
                  i=0     i=1   i=2    i=3     i=4

*/




var qtDeLinhasEcolunasDaMatriz = 2; // representa a quantidade de linhas e colunas da matriz 
var repositorioAsteriscos = '';

for (let iLinha = 0; iLinha < qtDeLinhasEcolunasDaMatriz; iLinha += 1) {

    //só vai entrar aqui quando linha for igual a zero dessa forma 
    //reduzo o tempo de processamento algorítmo e melhoro a performace 
    if (iLinha < 1) {

        for (let iColuna = 0; iColuna < qtDeLinhasEcolunasDaMatriz; iColuna += 1) {

            //coloquei o algoritmo dessa forma apra fins didáticos 
            //poderia ser assim repositorioAsteriscos+='*;'

            repositorioAsteriscos += '*';

        }
    }
    console.log(repositorioAsteriscos);

}
