const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const bodyHTML = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = bodyHTML.classList.contains("modo-escuro");

  bodyHTML.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/moon.png");
  }
});
