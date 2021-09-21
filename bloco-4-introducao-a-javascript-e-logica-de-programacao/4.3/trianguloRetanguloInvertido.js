
/*

                    DEMONSTRATIVO DE UMA MATRIZ        

                  C 1    C 2     C 3    C 4   C 5
                |------|------|------|------|------|
            L 5 |      |      |      |      |  *   | 
                |      |      |      |      |      | 
                |------|------|------|------|------| 
                |      |      |      |      |      | 
            L 4 |      |      |      |   *  |  *   | 
                |------|------|------|------|------|
                |      |      |    * |   *  |  *   | 
            L 3 |      |      |      |      |      | 
                |------|------|------|------|------|
                |      |   *  |   *  |   *  |  *   | 
            L 2 |      |      |      |      |      | 
                |------|------|------|------|------|
                |      |      |      |      |      | 
            L 1 |   *  |  *   |  *   |   *  |  *   | 
                |------|------|------|------|------|
                  i=0     i=1   i=2    i=3     i=4
*/


/*Bom resaltar que quando trabalhamos com for dentro de for estamos trabalhando com matriz de posições
que é uma assunto no início de difícil abstração logo para que possamos entender uma boa dica é:
* narra em detalhe todos seu entendimento sobre o acontecimento, isso ajuda com o tempo o conceito se 
encaixar melhor na sua cabeca, pois a memória do computador guarda informa alocadas em forma de matriz 
daí um conceito que deverá ficar bem claro na mente do Desenvolvedor. Bem isso deve ocorrer com o tempo
respeitando seu nível de abstração e aprendizado. 
*/

let n = 5; //representa a quantidade de linhas e colunas que terá essa matriz  
let symbol = '*'; // é o caracter que você irá fazer o preenchimento dos espaços que irá alocar nessa matriz de posições
let inputLine = ''; // a linha ou container que irá receber o simbolo 
let inputPosition = n;//uma variável de controle criada para otimizar a questão do espaço para inverter o triângulo 

// aqui o primerio for - esse irá percorrer as linhas da matiz 
// 1- o for irá inicializa em zero (lineIndex=0);
// 2- a condição é que lineIndex seja menor que n que no caso é a quantidade de linhas e colunas da matriz 
// 3- será incrementado ou dará um salto de 1 em 1 ao percorrer essa matriz de posições 

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //nesse ponto o segundo for - esse irá respectivamente percorrer as colunas da matriz.
  //1- columnInder inicia na posição zero da matriz 
  //2- codição de saída é que o loop irá ocorrer até que columnIndex seja menor igual a quantidade de linas e colunas da matriz (n)
  //3- será incrementado ou dará um salto de 1 em 1 dentro da posição da matriz 
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {


    /*Narrativa do Debug: 
    1-Na primeira entrada do columnIndex dentro do candicional composta ele terá em seu valor na (position)
    iniciado em 0(zero) enquanto inputPosition terá a quantidade máxima da matriz em nosso caso n=5 isso valida
    a entrada do compilador dentro da nossa estrutura condicional ;
    */

    if (columnIndex < inputPosition) {

      /*  2-Depois de feita a verificação e dentro da estrutura mais especificamente no bloco de scopo if acontecerá 
          o seguinte caso:
            
          * inputLine receberá inputLine (que inicialmente não tem espaço nenhum como explicitado no momento da definição
            da variável na parte superior do nosso escopo global inputLine='' traduzindo inputLine recebe uma string sem 
            espaço nenhum na sua inicialização)
          

          * Mais observe que na mesma linha essa string receberá uma espaço em branco que utilizado o operado de concatenação
            +(mais) tendo como representaçaõ uma string acrescida de um espaço vazio. Exemplo: inputLine=inputLine + ' '  
            
            Observação esse processo irá perdurar até que columnIndex seja 5 e não atenda mais a condição do escopo
            que é formado pelo if da estrutura condicional hora analisada. No final teremos algo assim:

            inputLine='    '    -> inputLine representado por uma string e acrescido de quatro espaços 
            
            */ 

            
      inputLine = inputLine + ' ';
    } else {
      /*
      saindo desse escopo if pois nesse ponto columnIndex será 5 e não será mais menor que inputPosition ele irá
      passar a interpretar a segunda parete do escpo pertencente a estrutura condicional que é o else onde 
      inputLine já chaga com a seguinte característica:
      inputLine='    '; 
       
      */
      inputLine = inputLine + symbol;

      /*
      Nesse ponto inputLine é acrescido do simbolo descrito na parte superior do nosso escopo global que em nosso caso
      é o (*) logo teremos algo assim nesse ponto:
      inputLine='    *'   >> formando dessa forma o primeiro caracter que irá representar nosso triangulo retangulo 
      invertido 
             
      */

    }
  }
  /* nesse ponto ele imprime no console a estrutura já montada no inputLine*/
  console.log(inputLine);
  //neste ponto ele zera a estrutura e segue o fluxo do for dentro de for
  inputLine = '';
  //nesse ponto o input position é decrementa em -1
  inputPosition -= 1;

  /*
  Observação com essa decrementação desse inputPosition irá diminuir as vezes que o compilador irá lê o meu escopo 
  if do bloco de estrutura condicional sempre em menos - isso implica dizer que na proxima vez ele terá valor 4 e
  não mais 5 o que me leva a ter algo parecido assim na proxima impressão 
  inputLine='   **' e por aí vai até formar todo triangulo retangulo invertido 
  
  */

};