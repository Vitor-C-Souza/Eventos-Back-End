'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_fornecedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_fornecedor.init({
    Razao_social_fornecedor: DataTypes.STRING,
    Nome_fantasia_fornecedor: DataTypes.STRING,
    Cpf_fornecedor: DataTypes.INTEGER,
    Tipo_servico_fonercedor: DataTypes.STRING,
    Endereço_fornecedor: DataTypes.STRING,
    Incricao_estatual_fornecedor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_fornecedor',
  });
  return tb_fornecedor;
};