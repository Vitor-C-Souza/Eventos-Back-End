const database = require('../models')

const { pedidoServices } = require('../services')
const pedidoServices = new pedidoServices()

class pedidoController {

    static async pegaTodosOsPedidos(req, res) {
      try {

        const pegaTodosOsPedidos = await pedidoServices.pegaTodosOsRegistros()
        return res.status(200).json(pegaTodosOsPedidos)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmPedido(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await pedidoServices.pegaUmRegistro(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaPedido(req, res){
        const NovoPedido = req.body

        try{
            const PedidoCriado = await pedidoServices.criaRegistro(NovoPedido)

            return res.status(200).json(PedidoCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaPedido(req, res){
        const NovaInfo = req.body
        const { id } = req.params

        try{
            await pedidoServices.atualizaRegistro(NovaInfo, id)

            const pedidoAtualizado = await pedidoServices.pegaUmRegistro(id)

            return res.status(200).json(pedidoAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaPedido(req,res){
        const { id } = req.params

        try{
            await pedidoServices.apagaRegistro(id)

            return res.status(200).json(`id ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = pedidoController