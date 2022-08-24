const database = require('../models')

const { loginServices } = require('../services')
const loginServices = new loginServices()

class loginController {

    static async pegaTodosOsLogins(req, res) {
      try {

        const todosOsLogins = await loginServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsLogins)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmLogin(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await loginServices.pegaUmRegistro(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async crialogin(req, res){
        const Novologin = req.body

        try{
            const LoginCriado = await loginServices.criaRegistro(Novologin)

            return res.status(200).json(LoginCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaLogin(req, res){
        const NovaInfo = req.body
        const { id } = req.params

        try{
            await loginServices.atualizaRegistro(NovaInfo, id)

            const loginAtualizado = await loginServices.pegaUmRegistro(id)

            return res.status(200).json(loginAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaLogin(req,res){
        const { id } = req.params

        try{
            await loginServices.apagaRegistro(id)

            return res.status(200).json(`id ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = loginController