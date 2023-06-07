const { Model, DataTypes, sequelize } = require("../../mysql");
const disctrict = require("../governments/districts");
const regulators = require("../systems/regulators");
class district_regulators extends Model { };
district_regulators = sequelize.define('wasimamizi_wilaya', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },

}, { paranoid: true });
regulators.belongsToMany(disctrict, { through: district_regulators });
disctrict.belongsToMany(regulators, { through: district_regulators });

district_regulators.belongsTo(regulators);
regulators.hasMany(district_regulators);

district_regulators.belongsTo(disctrict);
disctrict.hasMany(district_regulators)

module.exports = district_regulators;