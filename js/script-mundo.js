import {keyEvent} from './controle-personagem.js';
import {alteraVisualizacao} from './controle-edicao.js';
import {populaSelect} from './controle-widgets.js';
import {desabilitaGaleria} from './controle-widgets.js';
import {desabilitaTexto} from './controle-widgets.js';
import {desabilitaAudio} from './controle-widgets.js';
import {desabilitaContador} from './controle-widgets.js';
import {desabilitaVideo} from './controle-widgets.js';
import {habilitaWidgets} from './controle-widgets.js';
import {changeVideo} from './video.js';
import {mudarImg1} from './galeria.js';
import {mudarImg2} from './galeria.js';
import {mudarImg3} from './galeria.js';

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

let criarWidget = document.querySelector('#btn-criar-widget');
criarWidget.addEventListener('click', habilitaWidgets);

let desGaleria = document.querySelector('#desabilitaGaleria');
desGaleria.addEventListener('click', desabilitaGaleria);

let desTexto = document.querySelector('#desabilitaTexto');
desTexto.addEventListener('click', desabilitaTexto);

let desAudio = document.querySelector('#desabilitaAudio');
desAudio.addEventListener('click', desabilitaAudio);

let desContador = document.querySelector('#desabilitaContador');
desContador.addEventListener('click', desabilitaContador);

let desVideo = document.querySelector('#desabilitaVideo');
desVideo.addEventListener('click', desabilitaVideo);
