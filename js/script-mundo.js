import {keyEvent} from './controle-personagem.js';
import {alteraVisualizacao} from './controle-edicao.js';
import {populaSelect} from './controle-widgets.js';
import {changeVideo} from './video.js';
import {carregaConteudo, mudarImg1, mudarImg2, mudarImg3} from './controle-storage.js'

// Adiciona listener para entrada do teclado
let bodyEl = document.querySelector('body');
bodyEl.addEventListener('keydown', keyEvent);

// Adicionar listener para controlar botões visíveis na tela
let botoesControle = document.querySelectorAll('.btn-controle');
for (let botao of botoesControle) {
  botao.addEventListener('click', alteraVisualizacao);
}

let botaoAddWidget = document.querySelector('#btn-add-widget');
botaoAddWidget.addEventListener('click', populaSelect);

let changeImg1 = document.querySelector('#buttonImg1');
changeImg1.addEventListener('click', mudarImg1);

let changeImg2 = document.querySelector('#buttonImg2');
changeImg2.addEventListener('click', mudarImg2);

let changeImg3 = document.querySelector('#buttonImg3');
changeImg3.addEventListener('click', mudarImg3);

document.addEventListener("DOMContentLoaded", carregaConteudo);
