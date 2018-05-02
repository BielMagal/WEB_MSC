import {keyEvent} from './controle-personagem.js';

// Pega o body
let bodyEl = document.querySelector('body');
bodyEl.addEventListener('keydown', keyEvent);
