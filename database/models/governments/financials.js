const { Model, DataTypes, sequelize } = require("../../mysql");
const presidencies = require("./presidencies");
class financials extends Model { };
financials = sequelize.define('financials', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    start: { type: DataTypes.DATE },
    end: { type: DataTypes.DATE },
    active: { type: DataTypes.BOOLEAN, defaultValue: false }
}, { paranoid: true });
financials.belongsTo(presidencies);
presidencies.hasMany(financials);
module.exports = financials;