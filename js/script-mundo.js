import {keyEvent} from './controle-personagem.js';
import {alteraVisualizacao} from './controle-edicao.js';
import {changeVideo} from './video.js';

// Adiciona listener para entrada do teclado
let bodyEl = document.querySelector('body');
bodyEl.addEventListener('keydown', keyEvent);

// Adicionar listener para controlar botões visíveis na tela
let botoesControle = document.querySelectorAll('.btn-controle');
for (let botao of botoesControle) {
  botao.addEventListener('click', alteraVisualizacao);
}

let clickChangeVideo = document.querySelector('#buttonVideo');
bodyEl.addEventListener('click', changeVideo);
