/**
 * Comments:
 *      - Thêm trường is_active
 */
module.exports = function (sequelize, DataTypes) {
    var District = sequelize.define('District', {
        name: { type: DataTypes.STRING, allowNull: true },
        code: { type: DataTypes.STRING, allowNull: false, unique: true, primaryKey: true },
        is_active: { type: DataTypes.BOOLEAN, allowNull: false }
    }, {
            tableName: 'districts',
            underscored: true,
            paranoid: true,
            classMethods: {
                associate: function (models) {
                  
                }
            }
        });

    return District;
}
