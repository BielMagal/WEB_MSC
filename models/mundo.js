// Pacotes
const mongoose = require('mongoose');

let mundo_schema = new mongoose.Schema({
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  email: { type: String, required: true, unique: true, lowercase: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  mundo: { type: Number, default: 0 },
});
