'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('districts', [
      {
        name: 'Hai Ba Trung',
        code: '11',
        is_active: true,
        city: '01'
      }, 
      {
        name: 'Phu Ly',
        code: '22',
        is_active: false,
        city: '02'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('districts', null, {});
  }
};
