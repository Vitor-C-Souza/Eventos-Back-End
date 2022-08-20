'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome_usuario: {
        type: Sequelize.STRING
      },
      Cpf_ususario: {
        type: Sequelize.INTEGER
      },
      Telefone_usuario: {
        type: Sequelize.INTEGER
      },
      Celular_usuario: {
        type: Sequelize.INTEGER
      },
      Data_nasc_usuario: {
        type: Sequelize.DATE
      },
      Email_usuario: {
        type: Sequelize.STRING
      },
      Endereço_usuario: {
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
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_usuarios');
  }
};