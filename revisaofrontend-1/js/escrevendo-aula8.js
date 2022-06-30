//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para criar uma estrutura básica do HTML 5?");
  if ((nome == "!")) {
    alert("O " + nome + ", serve para criar uma estrutura básica no HTML5. Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou!\nVamos tentar novamente?");
    return;
  }
  window.location="aula9.html";
};
