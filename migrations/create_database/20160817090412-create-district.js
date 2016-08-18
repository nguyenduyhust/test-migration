'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('districts', {
      name: { type: Sequelize.STRING, allowNull: true },
      code: { type: Sequelize.STRING, allowNull: false, unique: true, primaryKey: true },
      is_active: { type: Sequelize.BOOLEAN, allowNull: false },
      city: {
        type: Sequelize.STRING,
        references: {
          model: 'cities',
          key: 'code'
        }
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deleteAt: { type: Sequelize.DATE }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('districts');
  }
};