const Services = require('./Services')

class ProdutoServices extends Services {
    constructor(){
        super('tb_produto')
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

module.exports = ProdutoServices