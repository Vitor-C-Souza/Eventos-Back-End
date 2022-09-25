const database = require('../models')
const moment = require('moment')

const { usuarioServices } = require('../services')
const UsuarioServices = new usuarioServices()

const { loginServices } = require('../services')
const LoginServices = new loginServices()

class usuarioController {

    static async pegaTodosOsUsuarios(req, res) {
      try {

        const todosOsUsuarios = await UsuarioServices.pegaTodosOsRegistros()

        return res.status(200).json(todosOsUsuarios)

      } catch (error) {

        return res.status(500).json(error.message)
      
    }
    }

    static async pegaUmUsuario(req, res) {
        const { id } = req.params

        try{
            const PegaUm = await UsuarioServices.pegaUmRegistro(id)

            return res.status(200).json(PegaUm)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async criaUsuario(req, res){
        const NovoUsuario = req.body
        
        if(NovoUsuario.Data_nasc_usuario != null){
            NovoUsuario.Data_nasc_usuario = moment(NovoUsuario.Data_nasc_usuario, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }
        

        try{
            const UsuarioCriado = await UsuarioServices.criaRegistro(NovoUsuario)

            return res.status(200).json(UsuarioCriado)
        }catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async atualizaUsuario(req, res){
        
        const NovaInfo = req.body
        const { id } = req.params
 
        if(NovaInfo.Data_nasc_usuario != null){
            NovaInfo.Data_nasc_usuario = moment(NovaInfo.Data_nasc_usuario, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }
        try{
            await UsuarioServices.atualizaRegistro(NovaInfo, id)

            const usuarioAtualizado = await UsuarioServices.pegaUmRegistro(id)

            return res.status(200).json(usuarioAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async CriarUsuarioComSenha(req,res){
        const NovaInfoUsuario = req.body        

        if(NovaInfoUsuario.Data_nasc_usuario != null){
           NovaInfoUsuario.Data_nasc_usuario = moment(NovoUsuario.Data_nasc_usuario, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }

        try{
            const Usuario = { 
                Nome_usuario: NovaInfoUsuario.Nome_usuario,
                Cpf_usuario: NovaInfoUsuario.Cpf_usuario,
                Telefone_usuario: NovaInfoUsuario.Telefone_usuario,
                Celular_usuario: NovaInfoUsuario.Celular_usuario,
                Email_usuario: NovaInfoUsuario.Email_usuario,
                Endereço_usuario: NovaInfoUsuario.Endereço_usuario,
                Data_nasc_usuario: NovaInfoUsuario.Data_nasc_usuario
            }

            await UsuarioServices.criaRegistro(Usuario)         

            const IdUsuario = await UsuarioServices.idUsuario(NovaInfoUsuario.Cpf_usuario)

            const Login ={
                login_usuario: NovaInfoUsuario.Email_usuario,
                senha_usuario: NovaInfoUsuario.senha_usuario,
                id_usuario: Number(IdUsuario.id)            
            }
            
            await LoginServices.criaRegistro(Login)

            return res.status(200).json(NovaInfoUsuario)
        }catch{
            return res.status(500).json(error.message)
        }

    }

    static async apagaUsuario(req,res){
        const { id } = req.params

        try{
            await UsuarioServices.apagaRegistro(id)

            return res.status(200).json(`id ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = usuarioController