/*
id
*/

module.exports = function (sequelize, DataTypes) {
    var Tag = sequelize.define('Tag', {
        code: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true
        }
    }, {
        tableName: 'tags',
        paranoid: true,
        underscored: true,
        classMethods: {
            associate: function (models) {
                
            }
        }
    })

    return Tag;
}