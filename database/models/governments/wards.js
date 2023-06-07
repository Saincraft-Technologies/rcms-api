const { Model, DataTypes, sequelize } = require("../../mysql");
const districts = require("./districts");
class wards extends Model { };
wards = sequelize.define('kata', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    long:{ type: DataTypes.STRING },
    lat:{ type: DataTypes.STRING },
}, { paranoid: true });

wards.belongsTo(districts);
districts.hasMany(wards);
module.exports = wards;