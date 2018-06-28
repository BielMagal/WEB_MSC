// Colecoes
const Usuario = require('../models/usuario');

const TEXTO = 0;
const TEXTO_IMAGENS = 1;
const TEXTO_VIDEO = 2;
const TEXTO_AUDIO = 3;

/*
  GET /mundo
*/
exports.getMundo =  function (req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  };
  let contexto = {};
  let isOwner = true;
  let mundo = req.params.mundo;
  let usuarioMundo = req.user;
  // Verifica se este é o mundo do usuário atual
  if (mundo != req.user.mundo) {
    isOwner = false;
  }
  contexto.isOwner = isOwner;

  // Verifica se mundo existe
  Usuario.findOne({ mundo: mundo }, function(err, usuario) {
    if (err) {
      throw err;
    }
    if (!usuario) {
      res.redirect('/naoachou');
    }
    usuarioMundo = usuario;
  }).then(function() {
    contexto = {
      isOwner: isOwner,
      habilitadas: usuarioMundo.habilitadas,
      imagens: usuarioMundo.imagens,
      video: usuarioMundo.video,
      audio: usuarioMundo.audio,
      texto: usuarioMundo.textos[TEXTO],
      textoImagens: usuarioMundo.textos[TEXTO_IMAGENS],
      textoVideo: usuarioMundo.textos[TEXTO_VIDEO],
      textoAudio: usuarioMundo.textos[TEXTO_AUDIO],
      habilitadoTexto: usuarioMundo.habilitadoTexto,
      habilitadoImagens: usuarioMundo.habilitadoImagens,
      habilitadoVideo: usuarioMundo.habilitadoVideo,
      habilitadoAudio: usuarioMundo.habilitadoAudio,
    };
    // Carrega os elementos da página ao contexto
    res.render('mundo', contexto);
  } );
}

exports.postImagem1 = function(req, res, next) {
  console.log('post imagem1');
  console.log(req.params.img);
}

exports.postImagem2 = function(req, res, next) {
  console.log('post imagem2');
  console.log(req.params.img);
}

exports.postImagem3 = function(req, res, next) {
  console.log('post imagem3');
  console.log(req.params.img);
}
