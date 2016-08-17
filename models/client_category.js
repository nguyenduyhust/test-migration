'use strict';

module.exports = function (sequelize, DataTypes) {
    var ClientCategory = sequelize.define('ClientCategory', {
        code: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        urlImg: {
            type: DataTypes.STRING,
            validate: {
                // isUrl: true
            },
            field: 'url_img'
        }
    }, {
        tableName: 'client_categories',
        paranoid: true,
        underscored: true,
        classMethods: {
            associate: function (models) {
                
            }
        }
    })

    return ClientCategory;
}