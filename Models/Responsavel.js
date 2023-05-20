const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userResponsavel = new Schema({
    nome: {
        type: String
    },
    senha: {
        type: String
    },
    email: {
        type: String
    },
}, {
    collection: 'Responsavel'
});

module.exports = mongoose.model('Responsavel', userResponsavel);