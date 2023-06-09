const express = require('express');
const responsavel = require('../Models/Responsavel');
const app = express();
const responsavelRoutes = express.Router();
const { validarNome, validarSenha, validarEmail } = require('../Validation/validationsResponsavel');


let Responsavel = require('../Models/Responsavel')

// adiciona o usuário
responsavelRoutes.route('/add').post(async function (req, res) {
    let responsavel = new Responsavel(req.body);
    try {
        validarEmail(req.body.email);
        validarNome(req.body.nome);
        validarSenha(req.body.senha);


        responsavel.save(req.body)
            .then(result => {
                res.status(200).json({ 'status': 'sucess', 'msg': 'usuário cadastrado com sucesso' });
            })
            .catch(err => {
                res.status(409).json({ 'status': 'failure', 'msg': 'usuário não cadastrado' + err.message })
            });
    } catch (error) {
        res.status(400).json({ 'status': 'failure', 'msg': 'Não foi possivel cadastrar esse usuário' });
    };
});

// Rota de login
responsavelRoutes.route('/login').post(async function (req, res) {
    const { email, senha } = req.body;
  
    try {
      validarEmail(email);
      validarSenha(senha);
  
      const responsavel = await Responsavel.findOne({ email, senha });
  
      if (responsavel) {
        // Login bem-sucedido
        res.status(200).json({ status: 'success', msg: 'Login realizado com sucesso' });
      } else {
        // Usuário não encontrado
        res.status(404).json({ status: 'failure', msg: 'Usuário não encontrado' });
      }
    } catch (error) {
      // Erro de validação
      res.status(400).json({ status: 'failure', msg: 'Erro de validação', error: error.message });
    }
  });


module.exports = responsavelRoutes;