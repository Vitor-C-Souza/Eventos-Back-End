const database = require('../models')

const { fornecedorServices } = require('../services')
const fornecedorServices = new fornecedorServices()

class fornecedorController {

    static async pegaTodosOsfornecedor(req, res) {
      try {

        const todosOsfornecedor = await fornecedorServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsfornecedor)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmFornecedor(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await forencedorServices.pegaUmFornecedor(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaFornecedor(req, res){
        const Novofornecedor = req.body

        try{
            const fornecedorCriado = await fornecedorServices.criaFornecedor(Novofornecedor)

            return res.status(200).json(fornecedorCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaUsuario(req, res){
        const NovaInfo = req.body
        const { id } = req.params

        try{
            await fornecedorServices.atualizaRegistro(NovaInfo, id)

            const fornecedorAtualizado = await fornecedorServices.pegaUmRegistro(id)

            return res.status(200).json(fornecedorAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaFornecedor(req,res){
        const { id } = req.params

        try{
            await fornecedorServices.apagaFornecedor(id)

            return res.status(200).json(`id ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = fornecedorController