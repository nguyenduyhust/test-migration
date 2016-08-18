'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.renameTable('districts', 'provinces');
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.renameTable('provinces', 'districts');
    }
};