const database = require('../models')

const { produtoServices } = require('../services')
const ProdutoServices = new produtoServices()


class produtoController {

    static async pegaTodosOsProdutosDeUmFornecedor(req, res) {
        const { idfornecedor } = req.params
        
        try {

            const todosOsProdutosDeUmFornecedor = await ProdutoServices.pegaTodosOsRegistros(idfornecedor)
            return res.status(200).json(todosOsProdutosDeUmFornecedor)

        } catch (error) {

            return res.status(500).json(error.message)
      
        }
    }

    static async pegaTodosOsProdutosDeUmFornecedorPaginado(req, res) {
        const { idfornecedor, page } = req.params
        
        try {

            const todosOsProdutosDeUmFornecedor = await ProdutoServices.pegaTodosOsRegistros(idfornecedor)
        
            var produtosPaginados = []
            var count = 0
            for(var i = (page*3)-3; i < page*3; i++){

                if(todosOsProdutosDeUmFornecedor[i] == null){
                    break
                }
                produtosPaginados[count] = todosOsProdutosDeUmFornecedor[i]

                count++

            }
            return res.status(200).json(produtosPaginados)

        } catch (error) {

            return res.status(500).json(error.message)
      
        }
    }

    static async pegaUmProduto(req, res) {
        
        const { idfornecedor, idproduto } = req.params

        try{
            const PegaUmProduto = await ProdutoServices.pegaUmRegistro(idfornecedor, idproduto)

            return res.status(200).json(PegaUmProduto)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaProduto(req, res){
        const { idfornecedor } = req.params
        const Novoproduto = { ...req.body, id_fornecedor: Number(idfornecedor) }

        

        try{
            const ProdutoCriado = await ProdutoServices.criaRegistro(Novoproduto)

            return res.status(200).json(ProdutoCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaProduto(req, res){
        const NovaInfo = req.body
        const { idfornecedor, idproduto } = req.params

        try{
            await ProdutoServices.atualizaRegistro(NovaInfo, idfornecedor, idproduto)

            const produtoAtualizado = await ProdutoServices.pegaUmRegistro( idfornecedor, idproduto )

            return res.status(200).json(produtoAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaProduto(req,res){
        const { idfornecedor, idproduto } = req.params

        try{
            await ProdutoServices.apagaRegistro(idfornecedor, idproduto)

            return res.status(200).json(`produto ${idproduto} foi deletado do fornecedor ${idfornecedor}`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = produtoController