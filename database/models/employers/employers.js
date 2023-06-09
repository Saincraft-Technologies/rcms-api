const { Model, DataTypes, sequelize } = require("../../mysql");

/** charge item gari, nyama,  */
class employers extends Model { };
employers = sequelize.define('employers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    tin: { type: DataTypes.STRING },
    contract_ref: { type: DataTypes.STRING },
}, { paranoid: true });
module.exports = employers;