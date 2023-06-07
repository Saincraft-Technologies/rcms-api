const { Model, DataTypes, sequelize } = require("../../mysql");
const charge_categories = require("./charge_categories");
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
charges.belongsTo(charge_categories);
charge_categories.hasMany(charges);

module.exports = charges;