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
    Email_fornecedor: DataTypes.STRING,
    Cpf_fornecedor: DataTypes.BIGINT(11),
    Cep_fornecedor: DataTypes.INTEGER,
    Tipo_servico_fonercedor: DataTypes.STRING,
    Endereço_fornecedor: DataTypes.STRING,
    Incricao_estatual_fornecedor: DataTypes.INTEGER,
    Descricao_fornecedor: DataTypes.STRING(500),
    nota_fornecedor: DataTypes.INTEGER,
    quantidade_cliente_fornecedor: DataTypes.INTEGER,
    imagem_fornecedor: DataTypes.STRING(100),
    Celular_fornecedor: DataTypes.BIGINT(11),
    Incricao_estatual_fornecedor: DataTypes.INTEGER,
    valor_max: DataTypes.FLOAT(6),
    valor_min: DataTypes.FLOAT(6)
  }, {
    sequelize,
    modelName: 'tb_fornecedor',
  });
  tb_fornecedor.associate = function(models) {
    // associations can be defined here

    tb_fornecedor.hasMany(models.tb_pedido, {
      foreignKey: 'id_fornecedor'
    })
    tb_fornecedor.hasMany(models.tb_produto, {
      foreignKey: 'id_fornecedor'
    })
    tb_fornecedor.hasMany(models.tb_login, {
      foreignKey: 'id_fornecedor'
    })
  };
  return tb_fornecedor;
};