const { Model, DataTypes, sequelize } = require("../../mysql");
const ministries = require("./ministries");
class organisations extends Model { };
organisations = sequelize.define('taasisi', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
}, { paranoid: true });
organisations.belongsTo(ministries);
ministries.hasMany(organisations);
module.exports = organisations;