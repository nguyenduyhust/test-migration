'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('client_tags', {
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id'
        },
        field: 'client_id',
        primaryKey: true
      },
      tag: {
        type: Sequelize.STRING,
        references: {
          model: 'tags',
          key: 'code'
        },
        field: 'tag_code',
        primaryKey: true
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deleteAt: { type: Sequelize.DATE }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('client_tags');
  }
};