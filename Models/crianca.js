const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userCrianca = new Schema({
    nome: {
        type: String
    },
    idade: {
        type: Number
    },
    peso: {
        type: Number
    },
    altura: {
        type: Number
    }
}, {
    collection: 'Crianca'
});

module.exports = mongoose.model('Crianca', userCrianca);