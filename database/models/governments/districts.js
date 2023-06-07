const { Model, DataTypes, sequelize } = require("../../mysql");
const regions = require("../systems/regions");
class disctrict extends Model { };
disctrict = sequelize.define('wilaya', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    long: { type: DataTypes.STRING },
    lat: { type: DataTypes.STRING },
    area: { type: DataTypes.STRING }
}, { paranoid: true });
disctrict.belongsTo(regions);
regions.hasMany(disctrict);
module.exports = disctrict;