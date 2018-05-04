const CLASS_INVISIVEL = 'invisivel';

function habilitaCamposEdicao() {
  for (let item of document.querySelectorAll('.editavel')){
    item.classList.remove('invisivel');
  }
  for (let item of document.querySelectorAll('.widget')){
    if(item.id == 'widget-contador')
      continue;
    let ta = item.querySelector('textarea');
    ta.classList.remove('invisivel');
    let ct = item.querySelector('.card-text');
    ct.classList.add('invisivel');
    ta.value = ct.innerHTML;
  }
}

function habilitaCamposVisualizacao() {
  for (let item of document.querySelectorAll('.editavel')){
    item.classList.add('invisivel');
  }
  for (let item of document.querySelectorAll('.widget')){
    if(item.id == 'widget-contador')
      continue;
    let ta = item.querySelector('textarea');
    ta.classList.add('invisivel');
    let ct = item.querySelector('.card-text');
    ct.classList.remove('invisivel');
    ct.innerHTML = ta.value;
    window.localStorage.setItem(item.id + '-text', ta.value);
  }
}


function alteraVisualizacao() {
  let ctrlVisualizacao = document.querySelector('#controle-visualizacao');
  let ctrlEdicao = document.querySelector('#controle-edicao');
  if (ctrlVisualizacao.classList.contains(CLASS_INVISIVEL)) {
    ctrlVisualizacao.classList.remove(CLASS_INVISIVEL);
    ctrlEdicao.classList.add(CLASS_INVISIVEL);
    habilitaCamposVisualizacao();
  } else {
    ctrlEdicao.classList.remove(CLASS_INVISIVEL);
    ctrlVisualizacao.classList.add(CLASS_INVISIVEL);
    habilitaCamposEdicao();
  }
}

export {alteraVisualizacao};
