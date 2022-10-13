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
    disponibilidade_produto: DataTypes.BOOLEAN,
    imagem_produto: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'tb_produto',
  });
  tb_produto.associate = function(models) {
    // associations can be defined here

    tb_produto.hasMany(models.tb_pedido, {
      foreignKey: 'id_produto'
    })
    tb_produto.belongsTo(models.tb_fornecedor, {
      foreignKey: 'id_fornecedor'
    })
  };
  return tb_produto;
};