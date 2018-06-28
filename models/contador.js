// Pacotes
const mongoose = require('mongoose');

let contador_schema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});

module.exports = mongoose.model('contador', contador_schema);
