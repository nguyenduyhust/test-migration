'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clients', [
      {
        name: 'Nguyen Ba Duy',
        email: 'nguyenduy.hust@gmail.com',
        receive_adv_email: true,
        address: 'HUST dormitory',
        phone_number: '01659860645',
        note: 'Hello World!!!',
        member_code: 'MOMI001',
        point: 200,
        client_category: 'vip',
        district: '11',
        city: '01'
      },
      {
        name: 'Dao Quang Tiep',
        email: 'quangtiep.hust@gmail.com',
        receive_adv_email: true,
        address: 'HUST dormitory',
        phone_number: '01659860456',
        note: 'Hello World!!!',
        member_code: 'MOMI002',
        point: 200,
        client_category: 'nor',
        district: '22',
        city: '02'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('clients', null, {});
  }
};
