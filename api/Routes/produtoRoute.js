const { Router } = require('express')
const produtoController = require('../Controller/produtoController')

const router = Router()

router.get('/api/produto', produtoController.pegaTodosOsProdutos)
router.get('/api/produto/:id', produtoController.pegaUmProduto)
router.post('/api/produto', produtoController.criaProduto)
router.put('/api/produto/:id', produtoController.atualizaProduto)
router.delete('/api/produto/:id', produtoController.apagaProduto)


module.exports = router