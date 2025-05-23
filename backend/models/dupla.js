const mongoose = require('mongoose');

const duplaSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    riscada: { type: Boolean, default: true },
    pagamentoEfetuado: { type: Boolean, default: false }
});

module.exports = mongoose.model('Dupla', duplaSchema);
