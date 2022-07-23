'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_pedido.init({
    Itens_pedido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_pedido',
  });
  tb_pedido.associate = function(models) {
    // associations can be defined here

    tb_pedido.belongsTo(models.tb_fornecedor, {
      foreignKey: 'estudante_id'
    })
    tb_pedido.belongsTo(models.tb_produto, {
      foreignKey: 'turma_id'
    })
    tb_pedido.belongsTo(models.tb_usuario, {
      foreignKey: 'turma_id'
    })
  };
  return tb_pedido;
};