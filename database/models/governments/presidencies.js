const { Model, DataTypes, sequelize } = require("../../mysql");
const regions = require("../systems/regions");
class presidencies extends Model { };
presidencies = sequelize.define('awamu', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    start: { type: DataTypes.DATE },
    end: { type: DataTypes.DATE },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { paranoid: true });
module.exports = presidencies;