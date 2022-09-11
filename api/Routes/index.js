const bodyParser = require('body-parser')

const fornecedor = require('./fornecedorRoute')
const login = require('./loginRoute')
const pedido = require('./pedidoRoute')
const produto = require('./produtoRoute')
const usuario = require('./usuarioRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded( {extended: false}))
    app.use(fornecedor)
    app.use(login)
    //app.use(pedido)
    app.use(produto)
    app.use(usuario)
    
} 