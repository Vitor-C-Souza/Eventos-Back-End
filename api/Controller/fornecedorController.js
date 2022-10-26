const database = require('../models')

const { fornecedorServices } = require('../services')
const FornecedorServices = new fornecedorServices()

const { loginServices } = require('../services')
const LoginServices = new loginServices()

const { produtoServices } = require('../services')
const ProdutoServices = new produtoServices()

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

    static async CriarFornecedorComSenha(req,res){
        const NovaInfoFornecedor = req.body

        try{
            const Fornecedor = { 
                Razao_social_fornecedor: NovaInfoFornecedor.Razao_social_fornecedor,
                Nome_fantasia_fornecedor: NovaInfoFornecedor.Nome_fantasia_fornecedor,
                Email_fornecedor: NovaInfoFornecedor.Email_fornecedor,
                Cpf_fornecedor: NovaInfoFornecedor.Cpf_fornecedor,
                Tipo_servico_fonercedor: NovaInfoFornecedor.Tipo_servico_fonercedor,
                Endereço_fornecedor: NovaInfoFornecedor.Endereço_fornecedor,
                Incricao_estatual_fornecedor: NovaInfoFornecedor.Incricao_estatual_fornecedor,
                Celular_fornecedor: NovaInfoFornecedor.Celular_fornecedor
                
            }

            await FornecedorServices.criaRegistro(Fornecedor)         

            const idFornecedor = await FornecedorServices.idFornecedor(NovaInfoFornecedor.Cpf_fornecedor)

            const Login ={
                login_usuario: NovaInfoFornecedor.Email_fornecedor,
                senha_usuario: NovaInfoFornecedor.senha_usuario,
                id_fornecedor: Number(idFornecedor.id)            
            }
            
            await LoginServices.criaRegistro(Login)

            return res.status(200).json(NovaInfoFornecedor)
        }catch{
            return res.status(500).json(error.message)
        }

    }

    static async FiltroFornecedorProdutoPagina(req,res){
        const { produto, page } = req.params
        
        try{  
            const TodosFornecedoresEncontrados = await FornecedorServices.filtro(produto)
            
            var FornecedoresFiltrados = []
            var count = 0
            for(var i = (page*3)-3; i < page*3; i++){
                
                if(TodosFornecedoresEncontrados[i] == null){
                    break
                }
                
                FornecedoresFiltrados[count] = TodosFornecedoresEncontrados[i]
                
                count++
                
            }
            
            return res.status(200).json(FornecedoresFiltrados)            
        }
        catch{
            return res.status(500).json(message.error)
        } 
    }

    static async FiltroFornecedorProduto(req,res){
        const { produto } = req.params

        try{
            const TodosFornecedoresEncontrados = await FornecedorServices.filtro(produto)

            return res.status(200).json(TodosFornecedoresEncontrados)
        } catch{
            return res.status(500).json(message.error)
        }
    }
}

module.exports = fornecedorController