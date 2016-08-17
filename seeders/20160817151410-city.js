'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cities', [
      {
        name: 'Hà Nội',
        code: '01',
        is_active: true
      }, 
      {
        name: 'Hà Nam',
        code: '02',
        is_active: false
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cities', null, {});
  }
};
