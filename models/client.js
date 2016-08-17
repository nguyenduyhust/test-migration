'use strict';
module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
      name: { type: DataTypes.STRING, allowNull: false }, 
      email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
      receiveAdvEmail: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true, field: 'receive_adv_email' },
      address: { type: DataTypes.STRING, allowNull: false },
      phoneNumber: { type: DataTypes.STRING, allowNull: false, validate: { is: ["^[0-9]{9,11}$"] }, field: 'phone_number' },
      note: { type: DataTypes.TEXT },
      memberCode: { type: DataTypes.STRING, unique: true, field: 'member_code' },
      point: { type: DataTypes.INTEGER }
  }, {
      tableName: 'clients',
      paranoid: true,
      underscored: true,
      classMethods: {
          associate: function (models) {
              Client.belongsTo(models.ClientCategory, {foreignKey: 'client_category'});
            //   Client.belongsTo(models.District, {foreignKey: 'district_code'});
            //   Client.belongsTo(models.City, {foreignKey: 'city_code'});
          }
      }
  });
  return Client;
};