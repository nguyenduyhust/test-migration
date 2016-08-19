'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.changeColumn('clients', 'point', {
            type: Sequelize.FLOAT,
            defaultValue: 100
        })
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.changeColumn('clients', 'point', {
            type: Sequelize.INTEGER,
            defaultValue: 0
        })
    }
};