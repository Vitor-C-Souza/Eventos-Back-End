'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_produto.init({
    Nome_produto: DataTypes.STRING,
    Descricao_produto: DataTypes.STRING,
    valor_produto: DataTypes.FLOAT,
    disponibilidade_produto: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tb_produto',
  });
  return tb_produto;
};