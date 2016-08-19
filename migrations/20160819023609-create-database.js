'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('cities', {
      name: { type: Sequelize.STRING, allowNull: true },
      code: { type: Sequelize.STRING, allowNull: false, unique: true, primaryKey: true },
      is_active: { type: Sequelize.BOOLEAN, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deleteAt: { type: Sequelize.DATE }
    }).then(function () {
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
      })
    }).then(function () {
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
    }).then(function () {
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
        createdAt: { type: Sequelize.DATE, allowNull: false },
        updatedAt: { type: Sequelize.DATE, allowNull: false },
        deleteAt: { type: Sequelize.DATE }
      });
    }).then(function () {
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
    }).then(function () {
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
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('client_tags')
      .then(function () {
        return queryInterface.dropTable('tags');
      }).then(function () {
        return queryInterface.dropTable('clients');
      }).then(function () {
        return queryInterface.dropTable('client_categories')
      }).then(function () {
        return queryInterface.dropTable('districts');
      }).then(function () {
        return queryInterface.dropTable('cities');
      })
  }
};