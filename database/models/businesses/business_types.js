const { Model, DataTypes, sequelize } = require("../../mysql");
class business_types extends Model { };
business_types = sequelize.define('business_types', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    descriptions: { type: DataTypes.STRING }
}, { paranoid: true });

module.exports = business_types;