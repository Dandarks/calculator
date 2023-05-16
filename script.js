let tela = document.getElementById("tela");
var valorAtual; var soma; var subtrair; var multiplicar; var dividir;

function addNumber (n) {
    tela.value += n;
}

let sum = document.getElementById("sum");

sum.addEventListener("click", () => {
    valorAtual = parseInt(tela.value);
    soma = true;
    tela.value = "";
});

let sub = document.getElementById("sub");

sub.addEventListener("click", () => {
    valorAtual = parseInt(tela.value);
    subtrair = true;
    tela.value = "";
});

let mul = document.getElementById("mul");

mul.addEventListener("click", () => {
    valorAtual = parseInt(tela.value);
    multiplicar = true;
    tela.value = "";
});

let div = document.getElementById("div");

div.addEventListener("click", () => {
    valorAtual = parseInt(tela.value);
    dividir = true;
    tela.value = "";
})

function executar () {
    let resultado;

    if (soma == true){
        resultado = valorAtual + parseInt(tela.value);
        tela.value = resultado;
    } 

    if (subtrair == true){
        resultado = valorAtual - parseInt(tela.value);
        tela.value = resultado;
    }

    if (multiplicar == true){
        resultado = valorAtual * parseInt(tela.value);
        tela.value = resultado;
    }

    if (dividir == true){
        resultado = valorAtual / parseInt(tela.value);
        tela.value = resultado;
    }

    soma = false; subtrair = false; multiplicar = false; dividir = false;
}

function clean () {
    valorAtual = "";
    tela.value = "";
}