const database = require('../models')
const moment = require('moment')

const { usuarioServices } = require('../services')
const UsuarioServices = new usuarioServices()

class usuarioController {

    static async pegaTodosOsUsuarios(req, res) {
      try {

        const todosOsUsuarios = await UsuarioServices.pegaTodosOsRegistros()

        return res.status(200).json(todosOsUsuarios)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmUsuario(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await UsuarioServices.pegaUmRegistro(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaUsuario(req, res){
        const NovoUsuario = req.body
        

        NovoUsuario.Data_nasc_usuario = moment(NovoUsuario.Data_nasc_usuario, 'DD/MM/YYYY').format('YYYY-MM-DD')
        

        try{
            const UsuarioCriado = await UsuarioServices.criaRegistro(NovoUsuario)

            return res.status(200).json(UsuarioCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaUsuario(req, res){
        
        const NovaInfo = req.body
        const { id } = req.params
 
        if(NovaInfo.Data_nasc_usuario != null){
            NovaInfo.Data_nasc_usuario = moment(NovaInfo.Data_nasc_usuario, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }
        try{
            await UsuarioServices.atualizaRegistro(NovaInfo, id)

            const usuarioAtualizado = await UsuarioServices.pegaUmRegistro(id)

            return res.status(200).json(usuarioAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaUsuario(req,res){
        const { id } = req.params

        try{
            await UsuarioServices.apagaRegistro(id)

            return res.status(200).json(`id ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = usuarioController