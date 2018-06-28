// Pacotes
let passport            = require('passport');
const LocalStrategy     = require('passport-local').Strategy;
// const FacebookStrategy  = require('passport-facebook').Strategy;
// const GoogleStrategy    = require('passport-google-oauth20').Strategy;
const Usuario = require('../models/usuario');

passport.serializeUser((usuario, done) => {
  done(null, usuario._id);
});

passport.deserializeUser((id, done) => {
  Usuario.findById(id, (err, usuario) => {
    done(err, usuario);
  });
});

// Login com email e senha
passport.use(new LocalStrategy(function(email, senhaDigitada, next) {
    console.log('Entrou cria Strategy');
    Usuario.findOne({ email: email }).exec(function(err, usuario) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false);
      }

      console.log('usuario: ' + usuario);

      usuario.comparaSenha(senhaDigitada, function (err, isMatch) {
        if (isMatch) {
          return next(null, usuario);
        } else {
          return next(null, false);
        }
      });
      // if (usuario.senha != password) {
      //   return next(null, false);
      // }
      // return next(null, user);
    });
}));


// // Login com email e senha
// passport.use(new LocalStrategy({ usernameField: 'email' }, function (email, senha, done) {
//   email = email.toLowerCase();
//   Usuario.findOne({ email: email }, function (err, usuario) {
//     if (!usuario) {
//       return done(null, false, { message: 'E-mail ' + email + ' não encontrado' })
//     };
//     usuario.comparaSenha(senha, function (err, isMatch) {
//       if (isMatch) {
//         return done(null, usuario);
//       } else {
//         return done(null, false, { message: 'E-mail ou senha inválidos.' });
//       }
//     });
//   });
// }));

// // Verifica se usuario esta autenticado
// exports.estaAutenticado = function (req, res, next) {
//   if (req.isAuthenticated()) {
//     console.log("Autenticado");
//     return next()
//   };
//   console.log("Não está autenticado");
//   res.redirect('/login');
// };

module.exports = { passport: passport };
