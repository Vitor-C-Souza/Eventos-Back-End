const { Router } = require('express')
const fornecedorController = require('../Controller/fornecedorController')

const router = Router()

router.get('/fornecedor', fornecedorController.pegaTodosOsfornecedor)
//router.get('/niveis/:id', NivelController.pegaUmNivel)
router.post('/fornecedor', fornecedorController.criaFornecedor)
//router.put('/niveis/:id', NivelController.atualizaNivel)
//router.delete('/niveis/:id', NivelController.apagaNivel)


module.exports = router