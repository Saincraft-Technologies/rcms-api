const { Model, DataTypes, sequelize } = require("../../mysql");
const ministries = require("./ministries");
class coorperations extends Model { };
coorperations = sequelize.define('makampuni', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
}, { paranoid: true });

coorperations.belongsTo(ministries);
ministries.hasMany(coorperations);
module.exports = coorperations;