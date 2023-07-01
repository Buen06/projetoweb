const express = require('express');
const router = express.Router();

const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/login', autenticacaoController.loginView);
router.post('/autenticar', autenticacaoController.autenticar);
router.post('/sair', autenticacaoController.sair);

module.exports = router;
