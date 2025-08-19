import { Tabuleiro } from "./tabuleiro.js";

let jogo = new Tabuleiro();

function render() {
  let container = document.getElementById("tabuleiro");
  container.innerHTML = "";

  for (let i = 0; i < jogo.linhas; i++) {
    let linhaDiv = document.createElement("div");
    linhaDiv.classList.add("linha");

    for (let j = 0; j < jogo.colunas; j++) {
      let celula = document.createElement("div");
      celula.classList.add("celula");

      if (jogo.estado[i][j] === -1) {
        celula.classList.add("invalida");
      } else if (jogo.estado[i][j] === 1) {
        celula.classList.add("peca");
      } else {
        celula.classList.add("vazio");
      }

      linhaDiv.appendChild(celula);
    }
    container.appendChild(linhaDiv);
  }
}

render();
