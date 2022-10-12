const Services = require('./services')
const database = require('../models')

class fornecedorServices extends Services {
    constructor(){
        super('tb_fornecedor')
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

    async idFornecedor(CPF){
        return database[this.nomeDoModelo].findOne( { where: { Cpf_fornecedor: Number(CPF) }})
    }

    async TodosOsFornecedoresCategoria(id){
        return database[this.nomeDoModelo]
            .findAll( {            
                where: {id: id}
            })
    }
}

module.exports = fornecedorServices