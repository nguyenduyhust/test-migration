'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('client_categories', {
      code: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      urlImg: {
        type: Sequelize.STRING,
        validate: {
          // isUrl: true
        },
        field: 'url_img'
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deleteAt: { type: Sequelize.DATE }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('client_categories');
  }
};