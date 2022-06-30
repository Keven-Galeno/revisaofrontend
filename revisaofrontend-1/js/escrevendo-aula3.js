//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para  mostrar os repositorios remotos no git?");
  if ((nome == "git remote")) {
    alert("O " + nome + ", serve para mostrar os repositórios no git.Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou!\nVamos tentar novamente?");
    return;
  }
  window.location="aula4.html";
};
