//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para adicionar um repositorio no git?");
  if ((nome == "git remote add")) {
    alert("O" + nome + ", serve para adicionar um repositório ao git.Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou!\nVamos tentar novamente?");
    return;
  }
  window.location="aula3.html";
};
