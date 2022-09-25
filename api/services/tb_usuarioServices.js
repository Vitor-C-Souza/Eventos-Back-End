const Services = require('./Services')
const database = require('../models')

class UsuarioServices extends Services {
    constructor(){
        super('tb_usuario')
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

    async idUsuario(CPF){
        return database[this.nomeDoModelo].findOne( { where: { Cpf_usuario: Number(CPF) }})
    }
}

module.exports = UsuarioServices