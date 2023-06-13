const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
class categories extends Model { };
categories = sequelize.define('categories', {
    id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    handler: {
        type: DataTypes.ENUM('business', 'charges', 'items', 'none'),
        defaultValue: 'none'
    },
    description: {
        type: DataTypes.STRING
    }
}, { paranoid: true });
module.exports = categories;