const database = require('../models')

const { fornecedorServices } = require('../services')
const FornecedorServices = new fornecedorServices()

class fornecedorController {

    static async pegaTodosOsfornecedor(req, res) {
      try {

        const todosOsfornecedor = await FornecedorServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsfornecedor)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmFornecedor(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await FornecedorServices.pegaUmRegistro(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaFornecedor(req, res){
        const Novofornecedor = req.body

        try{
            const fornecedorCriado = await FornecedorServices.criaRegistro(Novofornecedor)

            return res.status(200).json(fornecedorCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaFornecedor(req, res){
        const NovaInfo = req.body
        const { id } = req.params

        try{
            await FornecedorServices.atualizaRegistro(NovaInfo, id)

            const fornecedorAtualizado = await FornecedorServices.pegaUmRegistro(id)

            return res.status(200).json(fornecedorAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaFornecedor(req,res){
        const { id } = req.params

        try{
            await FornecedorServices.apagaRegistro(id)

            return res.status(200).json(`id ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = fornecedorController