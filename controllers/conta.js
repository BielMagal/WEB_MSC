// Pacotes
// const passport = require('passport');
// Colecoes
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


/*
  GET /login
*/
exports.getLogin =  function (req, res) {
  res.render('login');
}

/*
  POST /login
*/
exports.postLogin = function (req, res, next) {
  console.log('post login');
  console.log(req.user);
  // if (req.isAuthenticated()) {
      res.redirect('/mundo');
  // } else {
    // res.redirect('/');
  // }
  // passport.authenticate('local', (err, usuario, info) => {
  //   console.log('entrou authenticate');
  //    if (err) {
  //      return next(err)
  //    };
  //    if (!usuario) {
  //      console.log(info.message);
  //      return res.redirect('/login');
  //    }
  //    req.logIn(usuario, function (err) {
  //      if (err) {
  //        return next(err)
  //      };
  //      console.log('Redirecionou para /mundo/' + usuario.mundo);
  //      // res.redirect('/mundo/' + usuario.mundo);
  //      res.redirect('/mundo');
  //    });
  //  });
}
