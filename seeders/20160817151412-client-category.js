'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('client_categories', [
      {
        code: 'nor',
        name: 'normal',
        url_img: './img/normal.png',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        code: 'vip',
        name: 'vip',
        url_img: './img/vip.png',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('client_categories', null, {});
  }
};
