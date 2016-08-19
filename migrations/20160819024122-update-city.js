'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('cities', 'under_central', {
      type: Sequelize.BOOLEAN, defaultValue: false
    }).then(function () {
      return queryInterface.renameTable('cities', 'provinces');
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('provinces', 'cities')
      .then(function () {
        return queryInterface.removeColumn('cities', 'under_central');
      })
  }
};