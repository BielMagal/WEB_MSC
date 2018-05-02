const SETA_ESQ = 37;      // Representação na tabela ASCII
const SETA_DIR = 39;      // Representação na tabela ASCII
const ESQUERDA = 0;
const DIREITA = 1;
const UNIDADE = '%';      // Unidade do deslocamento
const PASSO = 1;          // deslocamento em UNIDADE do personagem
const larguraFig = 95;    // largura dp personagem em pixels
const limiteEsq = 0;


/*
 Verifica se o usuário digitou tecla esquerda ou direita
*/
function keyEvent(event) {
  let key = event.keyCode || event.which;
  if (key == SETA_ESQ) {
    console.log("Seta esquerda");
    movePersonagem(ESQUERDA);
  } else if (key == SETA_DIR) {
    console.log("Seta direita");
    movePersonagem(DIREITA);
  }
}

function atualizaLimites() {
  let larguraTela = window.innerWidth;

}

/*
 Move o personagem para direita ou esquerda, se possível
*/
function movePersonagem(sentido) {
  // Atualiza limite da direita da tela
  let larguraTela = window.innerWidth;
  let limiteDir = (larguraTela - larguraFig) * 100 / larguraTela;
  // Seleciona o elemento html do personagem
  let personagemEl = document.querySelector('#personagem');
  // Retira a unidade do campo left
  let espaco = personagemEl.style.left.split(UNIDADE)[0];
  if (espaco == '') {
    espaco = 0;
  } else {
    espaco = parseInt(espaco);
  }
  // Faz o deslocamento se não ultrapassar o limite
  if (sentido == DIREITA && (espaco + PASSO) <= limiteDir) {
    personagemEl.style.left = (espaco + PASSO).toString() + '%';
  } else if ((espaco - PASSO) >= limiteEsq){
    personagemEl.style.left = (espaco - PASSO).toString() + '%';
  }
}

// Exporta apenas a função keyEvent, o resto é privado
export { keyEvent };
