'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_usuario.init({
    Nome_usuario: DataTypes.STRING,
    Cpf_ususario: DataTypes.INTEGER,
    Telefone_usuario: DataTypes.INTEGER,
    Celular_usuario: DataTypes.INTEGER,
    Data_nasc_usuario: DataTypes.DATE,
    Email_usuario: DataTypes.STRING,
    Endereço_usuario: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tb_usuario',
  });
  tb_usuario.associate = function(models) {
    // associations can be defined here

    tb_usuario.hasMany(models.tb_pedido, {
      foreignKey: 'id_usuario'
    })
    tb_usuario.hasOne(models.tb_login, {
      foreignKey: 'id_usuario',

    })
  };
  return tb_usuario;
};