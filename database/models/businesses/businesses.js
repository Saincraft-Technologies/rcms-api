const { Model, DataTypes, sequelize } = require("../../mysql");
const business_categories = require("./business_categories");
const contacts = require('../systems/contacts');
const business_provisions = require("./business_provisions");
class businesses extends Model { };
businesses = sequelize.define('businesses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING }
}, { paranoid: true });
businesses.belongsTo(business_categories);
business_categories.hasMany(businesses);
businesses.belongsTo(business_provisions);
business_provisions.hasMany(businesses);
businesses.belongsTo(contacts);
contacts.hasMany(businesses);

module.exports = businesses;