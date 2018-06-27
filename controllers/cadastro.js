const Usuario = require('../models/usuario');

/*
  GET /cadastro
*/
exports.getCadastro =  function(req, res) {
  res.render('cadastro');
}

/**
  POST /cadastro
*/
exports.postCadastro = function(req, res, next) {
  let usuario = new Usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  });

  usuario.save(function (err, usuario) {
    if (err) {
      next(err);
    }
  });
  res.redirect('login');
}
