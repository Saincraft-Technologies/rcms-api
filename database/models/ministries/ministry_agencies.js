const { Model, DataTypes, sequelize } = require("../../mysql");
const ministries = require("../governments/ministries");
const regulators = require("../systems/regulators");
class ministry_agencies extends Model { };
ministry_agencies = sequelize.define('wasimamizi_wizara', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
}, { paranoid: true });
ministries.belongsToMany(regulators, { through: ministry_agencies });
regulators.belongsToMany(ministries, { through: ministry_agencies });

ministry_agencies.belongsTo(regulators);
regulators.hasMany(ministry_agencies);

ministry_agencies.belongsTo(ministries);
ministries.hasMany(ministry_agencies)

module.exports = ministry_agencies;