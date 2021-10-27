// aqui estamos fazendo acesso a API por meio do link abaixo informado 
function fetchCripto() {
    return fetch(`https://api.coincap.io/v2/assets`) // retornado uma promisse bruta
        .then((response) => response.json()); // retornando o arquivo jsono polido porém uma promisse também 
}

// função assincrona 
function extraiDados(JSONDatos) {

    const listArrTriado = JSONDatos.data.map((item)=>{
        return ` moeda:${item.name}  simbolo${item.symbol} dolar${item.priceUsd}`    
    });
    return listArrTriado;

}


// função assincrona 
async function critoFuncitonMain() {
    try {
        // recebendo dados de cripto
        const criptoData = await fetchCripto();
        console.log(criptoData);
        const result=extraiDados(criptoData);
        console.log(result);

    } catch (error) {
        console.log('Seu erro é:', error);
    }
}

window.onload = () => {
    critoFuncitonMain();
};