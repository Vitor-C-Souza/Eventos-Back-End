'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_logins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login_usuario: {
        type: Sequelize.STRING
      },
      senha_usuario: {
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
      },
      id_usuario:{
        allowNull: true,
        type: Sequelize.INTEGER,
        references:  {model: 'tb_usuarios', key: 'id' }
      },
      id_fornecedor:{
        allowNull: true,
        type: Sequelize.INTEGER,
        references:  {model: 'tb_fornecedors', key: 'id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_logins');
  }
};