const Services = require('./Services')
const database = require('../models')

class ProdutoServices extends Services {
    constructor(){
        super('tb_produto')
    }

    async pegaTodosOsRegistros(idfornecedor){        
        return database[this.nomeDoModelo]
            .findOne( { where: { id_fornecedor: Number(idfornecedor) }})
    }

    async pegaUmRegistro(idFornecedor,idProduto){
        return database[this.nomeDoModelo]
            .findOne( { where: { id: Number(idProduto), id_fornecedor: Number(idFornecedor) }})
    }
    
    async criaRegistro(dados){
        return super.criaRegistro(dados)
    }

    async atualizaRegistro(NovaInfo, idfornecedor, idproduto){
        return super.atualizaRegistros(NovaInfo, { id: Number(idproduto), id_fornecedor: Number(idfornecedor) })
    }

    async apagaRegistro( idfornecedor, idproduto ){
        database[this.nomeDoModelo]
            .destroy({where:
                {  id: Number(idproduto),
                    id_fornecedor: Number(idfornecedor)
               }})
    }
}

module.exports = ProdutoServices