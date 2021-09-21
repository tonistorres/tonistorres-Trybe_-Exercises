
1- Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"


2-Mostre todo o conteúdo do arquivo countries.txt na tela.

cat countries.txt 

3-Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .

less countries.txt 

4-Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .

less countries.txt  / ENTER e o nome do arquivo a ser pesquisado. Obs.: a pesquisa faz diferenciação de maiúscula e minúscula.

5-Busque por Brazil no countries.txt .

less countries.txt  / ENTER e o Brazil a ser pesquisado. Obs.: a pesquisa faz diferenciação de maiúscula e minúscula.


6-Busque novamente por brazil , mas agora utilizando o lower case .

grep -i "brazil" countries.txt

7-Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

touch phrases.txt

cat >> phrases.txt

here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. fox


8-Busque pelas frases que não contenham a palavra fox .

grep -iv "fox" phrases.txt 

9-Conte o número de palavras do arquivo phrases.txt .

wc -w phrases.txt 

10-Conte o número de linhas do arquivo phrases.txt .

wc -l phrases.txt 

11-Crie os arquivos empty.tbt e empty.pdf .

touch empty.tbt
touch empty.pdf

12-Liste todos os arquivos do diretório unix_tests .

ls -d */ 

13-Liste todos os arquivos que terminem com txt .

ls *.txt

14-Liste todos os arquivos que terminem com tbt ou txt .

 ls *.txt *.tbt  

15-Acesse o manual do comando ls .

man ls
