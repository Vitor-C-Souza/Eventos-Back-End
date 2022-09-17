const { Router } = require('express')
const pedidoController = require('../Controller/pedidoController')

const router = Router()

router.get('/api/fornecedor/usuario/produto/pedido', pedidoController.pegaTodosOsPedidos)
router.get('/api/pedido/:id', pedidoController.pegaUmPedido)
router.post('/api/fornecedor/:idFornecedor/usuario/:idUsuario/produto/:idProduto/pedido', pedidoController.criaPedido)
router.put('/api/fornecedor/:idFornecedor/usuario/:idUsuario/produto/:idProduto/pedido/:idPedido', pedidoController.atualizaPedido)
router.delete('/api/pedido/:id', pedidoController.apagaPedido)


module.exports = router