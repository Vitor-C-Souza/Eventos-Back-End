'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_fornecedors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Razao_social_fornecedor: {
        type: Sequelize.STRING
      },
      Nome_fantasia_fornecedor: {
        type: Sequelize.STRING
      },
      Cpf_fornecedor: {
        type: Sequelize.INTEGER
      },
      Tipo_servico_fonercedor: {
        type: Sequelize.STRING
      },
      Endereço_fornecedor: {
        type: Sequelize.STRING
      },
      Incricao_estatual_fornecedor: {
        type: Sequelize.INTEGER
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_fornecedors');
  }
};