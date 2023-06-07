const { Model, DataTypes, sequelize } = require("../../mysql");
const wards = require("./wards");
class villages extends Model { };
villages = sequelize.define('vijiji', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    long:{ type: DataTypes.STRING },
    lat:{ type: DataTypes.STRING },
}, { paranoid: true });

villages.belongsTo(wards);
wards.hasMany(villages);
module.exports = villages;