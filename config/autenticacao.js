const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const FacebookStrategy  = require('passport-facebook').Strategy;
// const GoogleStrategy    = require('passport-google-oauth20').Strategy;
const Usuario = require('../models/usuario');

passport.serializeUser(function(usuario, done) {
  done(null, usuario._id);
});

passport.deserializeUser(function(id, done) {
  Usuario.findById(id, function(err, usuario) {
    done(err, usuario);
  });
});

// Login com email e senha
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'senha'
},function(email, senha, next) {
  Usuario.findOne({ email: email }, function(err, usuario) {
    if (err) {
      throw err;
    }
    if (!usuario) {
      return next(null, false);
    }
    usuario.comparaSenha(senha, function (err, igual) {
      if (err) {
        throw err;
      }
      if (igual) {
        return next(null, usuario);
      }
      return next(null, false);
    });
  });
}));

const estaAutenticado = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  };
  return res.redirect('/');
};

module.exports = {
  passport : passport,
  estaAutenticado: estaAutenticado
};
