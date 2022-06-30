//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para abrir o index no VisualStudio Code?");
  if ((nome == "CTRL+K CTRL+O")) {
    alert("O " + nome + ", serve para abrir o index no Visual Studio Code. Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou!\nVamos tentar novamente?");
    return;
  }
  window.location="aula8.html";
};
