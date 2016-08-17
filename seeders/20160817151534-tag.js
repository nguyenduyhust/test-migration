'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tags', [
      {
        code: '#regular_customer'
      },
      {
        code: '#vip_customer'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tags', null, {});
  }
};
