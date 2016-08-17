'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
      receiveAdvEmail: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true, field: 'receive_adv_email' },
      address: { type: Sequelize.STRING, allowNull: false },
      phoneNumber: { type: Sequelize.STRING, allowNull: false, validate: { is: ["^[0-9]{9,11}$"] }, field: 'phone_number' },
      note: { type: Sequelize.TEXT },
      memberCode: { type: Sequelize.STRING, unique: true, field: 'member_code' },
      point: { type: Sequelize.INTEGER },
      category: {
        type: Sequelize.STRING,
        references: {
          model: 'client_categories',
          key: 'code'
        },
        field: 'client_category'
      },
      district: {
        type: Sequelize.STRING,
        references: {
          model: 'districts',
          key: 'code'
        }
      },
      city: {
        type: Sequelize.STRING,
        references: {
          model: 'cities',
          key: 'code'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      deleteAt: {
        type: Sequelize.DATE
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('clients');
  }
};