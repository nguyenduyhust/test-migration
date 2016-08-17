'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('client_tags', [
      {
        client_id: 1,
        tag_code: '#vip_customer'
      },
      {
        client_id: 2,
        tag_code: '#regular_customer'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('client_tags', null, {});
  }
};
