'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn('cities','under_central',{ 
            type: Sequelize.BOOLEAN, defaultValue: false 
        })
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('cities', 'under_central');
    }
};