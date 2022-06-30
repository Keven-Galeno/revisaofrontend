//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para Salvar arquivos no git?");
  if ((nome == "git commit")) {
    alert("O " + nome + ", serve para salvar arquivos no git. Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou!\nVamos tentar novamente?");
    return;
  }
  window.location="aula7.html";
};
