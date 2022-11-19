const Services = require('./Services')
const database = require('../models')

class PedidoServices extends Services {
    constructor(){
        super('tb_pedido')
    }

    async pegaTodosOsRegistros(){
        return super.pegaTodosOsRegistros()
    }

    async pegaUmRegistro(id){
        return super.pegaUmRegistro(id)
    }
    
    async criaRegistro(dados){
        return super.criaRegistro(dados)
    }

    async atualizaRegistro(NovaInfo, id_fornecedor, id_usuario, id_produto, id_pedido){
        return super.atualizaRegistros(NovaInfo, { id: Number(id_pedido), id_fornecedor: Number(id_fornecedor), id_usuario: Number(id_usuario), id_produto: Number(id_produto) })    
    }

    async apagaRegistro(id){
        return super.apagaRegistro(id)
    }
}

module.exports = PedidoServices