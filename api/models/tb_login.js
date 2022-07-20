'use strict';
const {
  Model
} = require('sequelize');
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
  return tb_login;
};