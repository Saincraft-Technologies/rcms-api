const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
const countries = require("./countries");
class categories extends Model { };
categories = sequelize.define('categories', {
    id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    handler: {
        type: DataTypes.ENUM('business', 'general'),
        defaultValue: 'general'
    },
    description: {
        type: DataTypes.STRING
    }
}, { paranoid: true });
module.exports = categories;