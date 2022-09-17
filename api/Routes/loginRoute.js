const { Router } = require('express')
const loginController = require('../Controller/loginController')

const router = Router()

//login usuario
router.get('/api/usuario/:idUsuario/login', loginController.pegaLoginCliente)    
router.post('/api/usuario/:idUsuario/login', loginController.crialoginUsuario)
router.put('/api/usuario/:idUsuario/login', loginController.atualizaLoginCliente)
router.delete('/api/usuario/:idUsuario/login', loginController.apagaLoginCliente)
router.get('/api/login/usuario/', loginController.LogarUsuario)

//login fornecedor

router.get('/api/fornecedor/:idFornecedor/login', loginController.pegaLoginForncedor)    
router.post('/api/fornecedor/:idFornecedor/login', loginController.criaLoginForncedor)
router.put('/api/fornecedor/:idFornecedor/login', loginController.atualizaLoginFornecedor)
router.delete('/api/fornecedor/:idFornecedor/login', loginController.apagaLoginFornecedor)
router.get('/api/login/fornecedor', loginController.LogarFornecedor)

module.exports = router