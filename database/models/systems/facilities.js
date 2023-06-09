const { Model, DataTypes, sequelize } = require("../../mysql");
const regions = require("./regions");
class facilities extends Model { };
facilities = sequelize.define('facilities', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
}, { paranoid: true });
facilities.belongsTo(regions);
regions.hasMany(facilities);
module.exports = facilities;