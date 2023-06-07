const { Model, DataTypes, sequelize } = require("../../mysql");
const regions = require('../systems/regions');
class manicipals extends Model { };
manicipals = sequelize.define('manispaa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
}, { paranoid: true });

manicipals.belongsTo(regions);
regions.hasMany(manicipals);
module.exports = manicipals;