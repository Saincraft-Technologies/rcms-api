const { Model, DataTypes, sequelize } = require("../../mysql");
const countries = require("../systems/countries");
class ministries extends Model { };
ministries = sequelize.define('wizara', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }
}, { paranoid: true });
ministries.belongsTo(countries);
countries.hasMany(ministries);
module.exports = ministries;