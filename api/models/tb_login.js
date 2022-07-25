'use strict';
const {
  Model
} = require('sequelize');
const tb_produto = require('./tb_produto');
module.exports = (sequelize, DataTypes) => {
  class tb_login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_login.init({
    login_usuario: DataTypes.STRING,
    senha_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_login',
  });
  tb_login.associate = function(models) {
    // associations can be defined here

    tb_produto.belongsTo(models.tb_fornecedor, {
      foreignKey: 'id_fornecedor'
    })
    tb_produto.belongsTo(models.tb_usuario, {
      foreignKey: 'id_usuario'
    })
  };
  return tb_login;
};