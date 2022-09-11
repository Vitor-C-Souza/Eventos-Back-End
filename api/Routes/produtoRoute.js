const { Router } = require('express')
const produtoController = require('../Controller/produtoController')

const router = Router()

router.get('/api/fornecedor/:idfornecedor/produto', produtoController.pegaTodosOsProdutosDeUmFornecedor)
router.get('/api/fornecedor/:idfornecedor/produto/:idproduto', produtoController.pegaUmProduto)
router.post('/api/fornecedor/:idfornecedor/produto', produtoController.criaProduto)
router.put('/api/fornecedor/:idfornecedor/produto/:idproduto', produtoController.atualizaProduto)
router.delete('/api/fornecedor/:idfornecedor/produto/:idproduto', produtoController.apagaProduto)


module.exports = router