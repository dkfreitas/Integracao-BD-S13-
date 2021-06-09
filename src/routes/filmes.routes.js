const express = require('express')
const router = express.Router()

const controller = require('../controlleres/filmes.controller')

// Post
router.post('/', controller.criaFilme)

// Get
router.get('/', controller.listaFilme)

// Get
router.get('/:id', controller.listaUmFilme)

// Patch
router.patch('/:id', controller.atualizaFilme)

// Delete
router.delete('/:id', controller.deletaFilme)

module.exports = router