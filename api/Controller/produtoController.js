const database = require('../models')

const { produtoServices } = require('../services')
const produtoServices = new produtoServices()

class produtoController {

    static async pegaTodosOsProdutos(req, res) {
      try {

        const todosOsProdutos = await produtoServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsProdutos)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmProduto(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await produtoServices.pegaUmRegistro(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaProduto(req, res){
        const Novoproduto = req.body

        try{
            const ProdutoCriado = await produtoServices.criaRegistro(Novoproduto)

            return res.status(200).json(ProdutoCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaProduto(req, res){
        const NovaInfo = req.body
        const { id } = req.params

        try{
            await produtoServices.atualizaRegistro(NovaInfo, id)

            const produtoAtualizado = await produtoServices.pegaUmRegistro(id)

            return res.status(200).json(produtoAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaProduto(req,res){
        const { id } = req.params

        try{
            await loginServices.apagaRegistro(id)

            return res.status(200).json(`id ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = produtoController