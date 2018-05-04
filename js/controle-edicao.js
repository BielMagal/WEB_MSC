const CLASS_INVISIVEL = 'invisivel';

function habilitaCamposEdicao() {
}

function habilitaCamposVisualizacao() {
}


function alteraVisualizacao() {
  let ctrlVisualizacao = document.querySelector('#controle-visualizacao');
  let ctrlEdicao = document.querySelector('#controle-edicao');
  if (ctrlVisualizacao.classList.contains(CLASS_INVISIVEL)) {
    ctrlVisualizacao.classList.remove(CLASS_INVISIVEL);
    ctrlEdicao.classList.add(CLASS_INVISIVEL);
    //habilitaCamposVisualizacao();
  } else {
    ctrlEdicao.classList.remove(CLASS_INVISIVEL);
    ctrlVisualizacao.classList.add(CLASS_INVISIVEL);
    //habilitaCamposEdicao();
  }
}

export {alteraVisualizacao};
