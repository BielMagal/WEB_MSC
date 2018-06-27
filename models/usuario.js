// Pacotes
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Parâmetros
const qtd_saltos = 7;


let usuario_schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  facebook: String,
  google: String,
});

// Criptografa a senha antes de salvar
usuario_schema.pre('save', function(next) {
  if (!this.isModified('senha')) {
    return next();
  }
  let usuario = this;
  bcrypt.genSalt(qtd_saltos, (err, salto) => {
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

module.exports = mongoose.model('Usuario', usuario_schema);
