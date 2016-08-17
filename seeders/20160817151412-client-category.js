'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('client_categories', [
      {
        code: 'nor',
        name: 'normal',
        url_img: './img/normal.png'
      },
      {
        code: 'vip',
        name: 'vip',
        url_img: './img/vip.png'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('client_categories', null, {});
  }
};
