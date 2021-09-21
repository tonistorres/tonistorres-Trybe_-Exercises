Nota: vale apenas ressaltar que todas atividae inerente a exercício foi executada conforme direcionamento do course
o fato da mesma não conter arquivos ou pastas é exatamente por que neste exercício em específico o mesmo pede nos 
requisitos finais a deleção das pastas contidas no mesmo bem como todos os arquivos txt. Deixei apenas uma nota de
esclarecimento para este fato. E para melhor compreenção estou deixando os requesitos que foram exigido para à pratica
desse exercício.

 Parte I - Criação de arquivos e diretórios


    1-Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

    mkdir unix_tests

    2-Crie um arquivo de texto com o nome trybe.txt .
    
    touch trybe.txt 

    3-Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
 
    cp trybe.txt trybe_backup.txt

    4-Renomeie o arquivo trybe.txt .

    mv trybe.txt trybe_renomeado.txt

    5-Dentro de unix_tests , crie um novo diretório chamado backup .

    mkdir backup
    
    6-Mova o arquivo trybe_backup.txt para o diretório backup .

    mv trybe_backup.txt ./backup 

    7-Dentro de unix_tests , crie um novo diretório chamado backup2 .

    mkdir backup2

    8-Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .

    mv trybe_backup.txt /home/tonistorres/unix_tests/backup2


    9-Apague a pasta backup .

    rm -rf backup

    10-Renomeie a pasta backup2 para backup .

    mv backup2/ backup

    11-Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

    pwd

    12-Apague o diretório backup .

    rm -rf backup/

    13-Limpe o terminal.

    clear

Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt : 
    Internet
    Unix
    Bash
    HTML
    CSS
    JavaScript
    React
    SQL

    14-Mostre na tela as 5 primeiras skills do arquivo skills.txt .

    head -5 countries.txt 

    15-Mostre na tela as 4 últimas skills do arquivo skills.txt .

    tail -5 countries.txt 

    16-Apague todos os arquivos que terminem em .txt .

    rm -rf *.txt
