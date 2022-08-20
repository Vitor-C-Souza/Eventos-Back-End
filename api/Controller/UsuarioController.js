const database = require('../models')

const { usuarioServices } = require('../services')
const usuarioServices = new usuarioServices()

class usuarioController {

    static async pegaTodosOsUsuarios(req, res) {
      try {

        const todosOsNiveis = await usuarioServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsNiveis)

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
        const NovoNivel = req.body

        try{
            const NivelCriado = await usuarioServices.criaRegistro(NovoNivel)

            return res.status(200).json(NivelCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaUsuario(req, res){
        const NovaInfo = req.body
        const { id } = req.params

        try{
            await nivelServices.atualizaRegistro(NovaInfo, id)

            const NivelAtualizado = await usuarioServices.pegaUmRegistro(id)

            return res.status(200).json(NivelAtualizado)
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