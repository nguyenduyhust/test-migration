module.exports = function (sequelize, DataTypes) {
    var ClientTag = sequelize.define('ClientTag', {

    }, {
        tableName: 'client_tags',
        paranoid: true,
        underscored: true,
        classMethods: {
            associate: function (models) {
                ClientTag.belongsTo(models.Client);
                ClientTag.belongsTo(models.Tag);
            }
        }
    })

    return ClientTag;
}