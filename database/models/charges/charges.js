const { Model, DataTypes, sequelize } = require("../../mysql");
class charges extends Model { };
charges = sequelize.define('charges', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    descriptions: { type: DataTypes.STRING }
}, { paranoid: true });

module.exports = charges;