'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome_produto: {
        type: Sequelize.STRING
      },
      Descricao_produto: {
        type: Sequelize.STRING
      },
      valor_produto: {
        type: Sequelize.FLOAT
      },
      disponibilidade_produto: {
        type: Sequelize.BOOLEAN
      },
      imagem_produto:{
        type: Sequelize.STRING(100)
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
        allowNull: true,
        type: Sequelize.DATE
      },
      id_fornecedor:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:  {model: 'tb_fornecedors', key: 'id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_produtos');
  }
};