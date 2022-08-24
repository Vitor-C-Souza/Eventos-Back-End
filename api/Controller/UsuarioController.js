const database = require('../models')

const { usuarioServices } = require('../services')
const usuarioServices = new usuarioServices()

class usuarioController {

    static async pegaTodosOsUsuarios(req, res) {
      try {

        const todosOsUsuarios = await usuarioServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsUsuarios)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmUsuario(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await usuarioServices.pegaUmRegistro(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaUsuario(req, res){
        const NovoUsuario = req.body

        try{
            const UsuarioCriado = await usuarioServices.criaRegistro(NovoUsuario)

            return res.status(200).json(UsuarioCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaUsuario(req, res){
        const NovaInfo = req.body
        const { id } = req.params

        try{
            await usuarioServices.atualizaRegistro(NovaInfo, id)

            const usuarioAtualizado = await usuarioServices.pegaUmRegistro(id)

            return res.status(200).json(usuarioAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaUsuario(req,res){
        const { id } = req.params

        try{
            await usuarioServices.apagaRegistro(id)

            return res.status(200).json(`id ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = usuarioController