const Services = require('./Services')

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

    async atualizaRegistro(NovaInfo, id){
        return super.atualizaRegistro(NovaInfo, id)
    }

    async apagaRegistro(id){
        return super.apagaRegistro(id)
    }
}

module.exports = PedidoServices