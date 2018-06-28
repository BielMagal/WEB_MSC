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
  mundo: { type: Number, default: 0, unique: true },
  avatar: { type: String, default: '/img/carlton.gif'},
  habilitadoTexto: {type: Boolean, default: true},
  habilitadoImagens: {type: Boolean, default: false},
  habilitadoVideo: {type: Boolean, default: false},
  habilitadoAudio: {type: Boolean, default: true},
  imagens: { type: Array, default: [
    'https://images-na.ssl-images-amazon.com/images/I/512dtbDONBL._SY355_.jpg',
    'https://slm-assets2.secondlife.com/assets/12810720/view_large/not_unusual.jpg?1448051629',
    'https://upload.wikimedia.org/wikipedia/commons/5/5b/Alfonsocropped.jpg'
  ] },
  video: { type: String, default: 'https://www.youtube.com/embed/kKSxlJPmz40' },
  audio: { type: String, default: '/audio/som.mp3' },
  textos: { type: Array, default: [
    'Coloque aqui um texto',
    'Algumas imagens sobre \"It\'s not unusual\" e \"Um maluco no pedaço\"',
    'Um video de Carlton dançando \"It\'s not unusual\"',
    'Tantitararam Tantitararam, Tantitararam Tantitararam'
  ] },
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
