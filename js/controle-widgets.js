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
    console.log('chave: ' + widget.chave);
    console.log('valor: ' + widget.valor);
    let widgetEl = document.querySelector('#' + widget.chave);
    if (widgetEl == null || widgetEl.classList.contains('invisivel')) {
      console.log('entrou if');
      let opt = document.createElement('option');
      opt.id = 'opt-' + widget.chave;
      opt.value = widget.chave;
      opt.text = widget.valor;
      console.log(opt);
      selectEl.appendChild(opt);
    }
  }
}

// Habilita os widgets da tela selecionados
function habilitaWidgets() {
}

export {populaSelect};
