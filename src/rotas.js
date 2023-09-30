const express = require('express');
const router = express.Router();

const carrosController = require('./controllers/carroController');

router.get('/carros', carrosController.listarTodos);

module.exports = router;