const { Model, DataTypes, sequelize } = require("../../mysql");
const villages = require("./villages");
class streets extends Model { };
streets = sequelize.define('mitaa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    long: { type: DataTypes.STRING },
    lat: { type: DataTypes.STRING },
}, { paranoid: true });

streets.belongsTo(villages);
villages.hasMany(streets);
module.exports = streets;