'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('tags', {
      code: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deleteAt: { type: Sequelize.DATE }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tags');
  }
};