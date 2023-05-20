const express = require('express');
const responsavel = require('../Models/Responsavel');
const app = express();
const responsavelRoutes = express.Router();



let Responsavel = require('../Models/Responsavel')

// adiciona o usuário
responsavelRoutes.route('/add').post(async function (req, res) {
    let responsavel = new Responsavel(req.body);
    console.log(responsavel)
    responsavel.save(req.body)
        .then(result => {
            res.status(200).json({ 'status': 'sucess', 'msg': 'usuário cadastrado com sucesso' });
        })
        .catch(err => {
            res.status(409).json({ 'status': 'failure', 'msg': 'usuário não cadastrado' + err.message })
        });
});


module.exports = responsavelRoutes;