'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Itens_pedido: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_usuario:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:  {model: 'tb_usuarios', key: 'id' }
      },
      id_fornecedor:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:  {model: 'tb_fornecedors', key: 'id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_pedidos');
  }
};