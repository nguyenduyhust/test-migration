'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('districts', [
      {
        name: 'Hai Ba Trung',
        code: '11',
        is_active: true,
        city: '01',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, 
      {
        name: 'Phu Ly',
        code: '22',
        is_active: false,
        city: '02',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('districts', null, {});
  }
};
