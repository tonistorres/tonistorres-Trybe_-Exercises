window.onload = function() {
    console.log(localStorage.length);
    localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
    localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
    console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
}