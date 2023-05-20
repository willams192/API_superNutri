const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userCrianca = new Schema({
    nome: {
        type: String
    },
    idade: {
        type: String
    },
    peso: {
        type: Number
    },
    altura: {
        type: Number
    },
    cs: {
        type: String
    },
}, {
    collection: 'Crianca'
});

module.exports = mongoose.model('Crianca', userCrianca);