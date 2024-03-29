const database = require('../models')

const { loginServices } = require('../services')
const LoginServices = new loginServices()

class loginController {

    static async pegaLoginCliente(req, res) {
        const { idUsuario } = req.params

        try{
            const PegaLogin = await LoginServices.pegaTodosOsRegistrosC(idUsuario)

            return res.status(200).json(PegaLogin)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async crialoginUsuario(req, res){
        const { idUsuario } = req.params
        
        
        const NovoLoginUsuario = { ...req.body, id_usuario: Number(idUsuario) }

        try{
            const LoginCriado = await LoginServices.criaRegistro(NovoLoginUsuario)

            return res.status(200).json(LoginCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaLoginCliente(req, res){
        const NovaInfo = req.body
        const { idUsuario } = req.params

        try{
            await LoginServices.atualizaRegistroC(NovaInfo, idUsuario)

            const loginAtualizado = await LoginServices.pegaTodosOsRegistrosC(idUsuario)

            return res.status(200).json(loginAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaLoginCliente(req,res){
        const { idUsuario } = req.params

        try{
            await LoginServices.apagaRegistro(idUsuario)

            return res.status(200).json(`Login do usuario ${idUsuario} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async LogarUsuario(req,res){
        const Login = req.body.login_usuario
        const Senha = req.body.senha_usuario

        try{
            const UsuarioEncontrado = await LoginServices.Logar(Login, Senha)

            if(UsuarioEncontrado.id_usuario == null){
                return res.status(200).json(null)
            }
            else{
                const id = {id_usuario: Number(UsuarioEncontrado.id_usuario)}

                return res.status(200).json(id)
            }

            
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //login fornecedor
    static async criaLoginForncedor(req,res){
        const { idFornecedor } = req.params
        
        
        const NovoLoginfornecedor = { ...req.body, id_fornecedor: Number(idFornecedor) }

        try{
            const LoginCriado = await LoginServices.criaRegistro(NovoLoginfornecedor)

            return res.status(200).json(LoginCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async pegaLoginForncedor(req, res) {
        const { idFornecedor } = req.params

        try{
            const PegaLogin = await LoginServices.pegaTodosOsRegistrosF(idFornecedor)

            return res.status(200).json(PegaLogin)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaLoginFornecedor(req, res){
        const NovaInfo = req.body
        const { idFornecedor } = req.params

        try{
            await LoginServices.atualizaRegistroF(NovaInfo, idFornecedor)

            const loginAtualizado = await LoginServices.pegaTodosOsRegistrosF(idFornecedor)

            return res.status(200).json(loginAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaLoginFornecedor(req,res){
        const { idFornecedor } = req.params

        try{
            await LoginServices.apagaRegistroF(idFornecedor)

            return res.status(200).json(`Login do Forncedor ${idFornecedor} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async LogarFornecedor(req,res){
        const Login = req.body.login_usuario
        const Senha = req.body.senha_usuario

        try{
            const FornecedorEncontrado = await LoginServices.Logar(Login, Senha)

            if(FornecedorEncontrado.id_fornecedor == null){
                return res.status(200).json(null)
            }
            else{
                const id = {id_fornecedor: Number(FornecedorEncontrado.id_fornecedor)}

                return res.status(200).json(id)
            }

            
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = loginController