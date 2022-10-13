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
        allowNull: false,
        type: Sequelize.STRING
      },
      Nome_fantasia_fornecedor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Celular_fornecedor: {
        type: Sequelize.BIGINT(11)
      },
      Email_fornecedor: {
        type: Sequelize.STRING
      },
      Cpf_fornecedor: {
        allowNull: false,
        type: Sequelize.BIGINT(11)
      },
      Cep_fornecedor: {
        type: Sequelize.INTEGER
      },
      Tipo_servico_fonercedor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Endereço_fornecedor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Incricao_estatual_fornecedor: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Descricao_fornecedor: {
        type: Sequelize.STRING(500)
      },
      nota_fornecedor:{
        type: Sequelize.INTEGER
      },
      quantidade_cliente_fornecedor:{
        type: Sequelize.INTEGER
      },
      imagem_fornecedor:{
        type: Sequelize.BLOB
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