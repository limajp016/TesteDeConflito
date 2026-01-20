let texto = document.querySelector('h1');
texto.innerHTML = "Hora do desafio";

function detectaCliqueNoBotaoConsole() {
    console.log('Botão console clicado!');
}

function botaoAlertaClicado() {
    alert('Eu amo JS');
}

function newPrompt() {
    let cidade = prompt("Digite o nome de sua cidade: ");
    alert("Estive em " + cidade + " e me lembrei de você!");
}

function soma() {
    let num1 = parseInt(prompt("Digite um número inteiro qualquer: "));
    let num2 = parseInt(prompt("Digite um outro número inteiro qualquer: "));

    let resultado = parseInt(num1 + num2);

    alert("O resultado da soma dos números fornecidos será igual a: " + resultado);
}