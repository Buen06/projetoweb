const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/', autenticacaoController.verificarAutenticacao, indexController.indexView);

module.exports = router;