const widgets = [
  {chave: "widget-galeria", valor: 'Galeria'},
  {chave: 'widget-texto', valor: 'Texto'},
  {chave: 'widget-audio', valor: 'Áudio'},
  {chave: 'widget-video', valor: 'Vídeo'},
  {chave: 'widget-plaquinha', valor: 'Plaquinha'},
  {chave: 'widget-contador', valor: 'Contador de visitas'}
];

// Adiciona os widgets não visíveis ao select do modal de adição de widget
function populaSelect() {
  let selectEl = document.querySelector('#sel-tipo-widget');
  let options = document.querySelectorAll('#sel-tipo-widget > option');
  // Limpa o select
  for (let opt of options) {
    opt.remove();
  }
  for (let widget of widgets) {
    let widgetEl = document.querySelector('#' + widget.chave);
    if (widgetEl == null || widgetEl.classList.contains('invisivel')) {
      let opt = document.createElement('option');
      opt.id = 'opt-' + widget.chave;
      opt.value = widget.chave;
      opt.text = widget.valor;
      selectEl.appendChild(opt);
    }
  }
}

// Habilita os widgets da tela selecionados
function habilitaWidgets() {
  let selected = document.getElementById('sel-tipo-widget');
  selected = selected.options[selected.selectedIndex].value;
  document.getElementById(selected).classList.remove('invisivel');
  populaSelect();
}

function desabilitaGaleria() {
  document.getElementById('widget-galeria').classList.add('invisivel');
}

function desabilitaTexto() {
  document.getElementById('widget-texto').classList.add('invisivel');
}

function desabilitaAudio() {
  document.getElementById('widget-audio').classList.add('invisivel');
}

function desabilitaContador() {
  document.getElementById('widget-contador').classList.add('invisivel');
}

function desabilitaVideo() {
  document.getElementById('widget-video').classList.add('invisivel');
}

export {populaSelect, habilitaWidgets, desabilitaGaleria, desabilitaTexto, desabilitaAudio, desabilitaContador, desabilitaVideo};
