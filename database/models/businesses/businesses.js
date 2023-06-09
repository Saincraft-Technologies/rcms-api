const { Model, DataTypes, sequelize } = require("../../mysql");
const users = require('../systems/users');
class businesses extends Model { };
businesses = sequelize.define('businesses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    ref_no: { type: DataTypes.STRING },
    tin: { type: DataTypes.STRING }
}, { paranoid: true });
businesses.belongsTo(users);
users.hasMany(businesses);

module.exports = businesses;