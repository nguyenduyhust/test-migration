'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('cities', 'provinces');
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('provinces', 'cities');
  }
};