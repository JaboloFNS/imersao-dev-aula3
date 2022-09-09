//O computador tá escolhendo um número aleatório
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    let numeroInput = parseInt(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");


    if (numeroInput == numeroSecreto) {
        resultado.innerHTML = "Acertou, Mizeravi!! " + numeroSecreto + " é o número secreto!";
        document.getElementById("resultado").style.color = "green";
    } else if (numeroInput > 10 || numeroInput < 0) {
        resultado.innerHTML = "Digite um valor entre 0 e 10";
        document.getElementById("resultado").style.color = "red";

    } else if (numeroInput > numeroSecreto) {
        resultado.innerHTML = "Errouuuuu!! " + numeroInput + " é maior que o número secreto!!";
        document.getElementById("resultado").style.color = "red";
    } else if (numeroInput < numeroSecreto) {
        resultado.innerHTML = "Errouuuuu!! " + numeroInput + " é menor que o número secreto!!";
        document.getElementById("resultado").style.color = "red";

    }

}