const { Router } = require('express')
const fornecedorController = require('../Controller/fornecedorController')

const router = Router()

router.get('/api/fornecedor', fornecedorController.pegaTodosOsfornecedor)
router.get('/api/fornecedor/:id', fornecedorController.pegaUmFornecedor)
router.post('/api/fornecedor', fornecedorController.criaFornecedor)
router.put('/api/fornecedor/:id', fornecedorController.atualizaFornecedor)
router.delete('/api/fornecedor/:id', fornecedorController.apagaFornecedor)
router.post('/api/fornecedor/completo', fornecedorController.CriarFornecedorComSenha )
router.get('/api/produto/forncedor/:produto/page/:page', fornecedorController.FiltroFornecedorProduto)


module.exports = router