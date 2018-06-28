// Pacotes
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Colecoes
const Contador = require('../models/contador');
// Parâmetros
const QTD_SALTOS = 7;


let usuario_schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  mundo: { type: Number, default: 0 },
  facebook: String,
  google: String,
});


// Criptografa a senha antes de salvar
usuario_schema.pre('save', function(next) {
  if (!this.isModified('senha')) {
    return next();
  }
  let usuario = this;
  // Pega um valor para o mundo do usuario
  Contador.findByIdAndUpdate({_id: 'usuario_mundo'}, {$inc: { seq: 1} }, {new: true, upsert: true}).then(function(cont) {
    // Atribui valor do mundo
    usuario.mundo = cont.seq;

    // Criptografa a senha
    bcrypt.genSalt(QTD_SALTOS, (err, salto) => {
      if (err) {
        return next(err)
      };
      bcrypt.hash(usuario.senha, salto, (err, hash) => {
        if (err) {
          return next(err)
        };
        // Armazena a senha criptografada
        usuario.senha = hash;
        next();
      });
    });
  });
});

usuario_schema.methods.comparaSenha = function (senhaDigitada, next) {
  // Compara a senha digitada com a salva
  bcrypt.compare(senhaDigitada, this.senha, function (err, igual) {
    if (err) {
      return next(err);
    };
    next(null, igual);
  });
};

module.exports = mongoose.model('Usuario', usuario_schema);
