const Services = require('./Services')
const database = require('../models')

class loginServices extends Services {
    constructor(){
        super('tb_login')
    }

    async pegaUmRegistro(id){
        return super.pegaUmRegistro(id)
    }
    
    async criaRegistro(dados){
        return super.criaRegistro(dados)
    }

    async atualizaRegistroC(NovaInfo, id){
        return super.atualizaRegistros(NovaInfo, { id_usuario: Number(id)} )
    }

    async atualizaRegistroF(NovaInfo, id){
        return super.atualizaRegistros(NovaInfo, { id_fornecedor: Number(id)} )
    }

    async apagaRegistroC(id){
        database[this.nomeDoModelo]
            .destroy({where:
                {  id_usuario: Number(id)                    
                }
            })
    }
    
    async apagaRegistroF(id){
        database[this.nomeDoModelo]
            .destroy({where:
                {  id_fornecedor: Number(id)                    
                }
            })
    }

    async pegaTodosOsRegistrosC(id_usuario){
        return database[this.nomeDoModelo]
            .findOne( { where: { id_usuario: Number(id_usuario) }})
    }

    async pegaTodosOsRegistrosF(id_fornecedor){
        return database[this.nomeDoModelo]
            .findOne( { where: { id_fornecedor: Number(id_fornecedor) }})
    }
}

module.exports = loginServices