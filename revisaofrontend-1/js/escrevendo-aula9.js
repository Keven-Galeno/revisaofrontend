//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Quais são os 3 tipos de CSS?");
  if ((nome == "inline,interno,externo")) {
    alert("Os três tipos de CSS são" + nome + ". Parabéns você Concluiu nosso Game!");
  }else{
    alert("Infelizmente você errou!\nVamos tentar novamente?");
    return;
  }
  window.location="agradecimentos.html";
};
