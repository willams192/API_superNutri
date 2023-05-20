const express = require('express');
const crianca = require('../Models/crianca');
const app = express();
const criancaRoutes = express.Router();
const { validarNome, validarIdade, validarPeso, validarAltura, validarCS } = require('../Validation/validationsCrianca');



let Crianca = require('../Models/crianca')

// adiciona o usuário
criancaRoutes.route('/add').post(async function (req, res) {
    let crianca = new Crianca(req.body);
    try {
        validarNome(req.body.nome);
        validarIdade(req.body.idade);
        validarPeso(req.body.peso);
        validarAltura(req.body.altura);
        validarCS(req.body.cs);


        crianca.save(req.body)
            .then(result => {
                res.status(200).json({ 'status': 'sucess', 'msg': 'usuário cadastrado com sucesso' });
            })
            .catch(err => {
                res.status(409).json({ 'status': 'failure', 'msg': 'usuário não cadastrado' + err.message })
            });

    } catch (error) {
        res.status(400).json({ 'status': 'failure', 'msg': 'Não foi possivel cadastrar esse usuário' });
    }
});




// api puxando os usuários
criancaRoutes.route('/').get(function (req, res) {
    Crianca.find(function (err, crianca) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'msg': 'Algo deu errado' })
        } else {
            res.status(200).json({ 'status': 'sucess', 'crianca': crianca });
        };
    });
});


// usuario especifico
criancaRoutes.route('/crianca/:id').get(function (req, res) {
    let id = req.params.id;
    Crianca.findById(id, function (err, crianca) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'msg': 'Algo deu errado' })
        }
        else {
            res.status(200).json({ 'status': 'sucess', 'crianca': crianca });
        };
    });

});


criancaRoutes.route('/update/:id').put(function (req, res) {
    Crianca.findById(req.params.id, function (err, crianca) {
        if (!crianca) {
            res.status(404).send({ 'status': 'failure', 'msg': 'Usuário não encontrado' })
        } else {
            Object.assign(crianca, req.body);
            crianca.save().then(() => {
                res.status(200).json({ 'status': 'success', 'msg': 'Usuário atualizado com sucesso' })
            }).catch(err => {
                res.status(500).json({ 'status': 'failure', 'msg': 'Erro ao atualizar usuário' })
            });
        };
    });
});

criancaRoutes.route('/delete/:id').delete(function (req, res) {
    Crianca.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'msg': 'Algo deu errado' })
        } else {
            res.status(200).json({ 'staus': 'sucess', 'msg': 'Usuário deletado' })
        };
    });
});


module.exports = criancaRoutes;