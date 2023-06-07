const { Model, DataTypes, sequelize } = require("../../mysql");
const ministries = require("./ministries");
class agencies extends Model { };
agencies = sequelize.define('agencies', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    descriptions: { type: DataTypes.TEXT }
}, { paranoid: true });

agencies.belongsTo(ministries);
ministries.hasMany(agencies);
module.exports = agencies;