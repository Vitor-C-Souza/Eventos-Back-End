const database = require('../models')

const { pedidoServices } = require('../services')
const PedidoServices = new pedidoServices()

class pedidoController {

    static async pegaTodosOsPedidos(req, res) {
      try {

        const pegaTodosOsPedidos = await PedidoServices.pegaTodosOsRegistros()
        return res.status(200).json(pegaTodosOsPedidos)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmPedido(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await PedidoServices.pegaUmRegistro(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaPedido(req, res){
        const { idFornecedor, idUsuario, idProduto } = req.params
        const NovoPedido = { ...req.body, id_fornecedor: Number(idFornecedor), id_usuario: Number(idUsuario), id_produto: Number(idProduto) }

        try{
            const PedidoCriado = await PedidoServices.criaRegistro(NovoPedido)

            return res.status(200).json(PedidoCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaPedido(req, res){
        const NovaInfo = req.body
        const { idFornecedor, idUsuario, idProduto, idPedido } = req.params

        try{
            await PedidoServices.atualizaRegistro(NovaInfo, idFornecedor, idUsuario, idProduto, idPedido)

            const pedidoAtualizado = await PedidoServices.pegaUmRegistro(idPedido)

            return res.status(200).json(pedidoAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaPedido(req,res){
        const { id } = req.params

        try{
            await PedidoServices.apagaRegistro(id)

            return res.status(200).json(`pedido ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = pedidoController