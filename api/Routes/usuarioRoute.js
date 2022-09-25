const { Router } = require('express')
const usuarioController = require('../Controller/UsuarioController')

const router = Router()

router.get('/api/usuario', usuarioController.pegaTodosOsUsuarios)
router.get('/api/usuario/:id', usuarioController.pegaUmUsuario)
router.post('/api/usuario', usuarioController.criaUsuario)
router.put('/api/usuario/:id', usuarioController.atualizaUsuario)
router.delete('/api/usuario/:id', usuarioController.apagaUsuario)
router.post('/api/usuario/completo', usuarioController.CriarUsuarioComSenha)


module.exports = router