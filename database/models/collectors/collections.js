const { Model, DataTypes, sequelize } = require("../../mysql");
const business_items = require("../businesses/business_items");
const contacts = require('../systems/contacts');
const collectors = require("./collectors");

/** charge item gari, nyama,  */
class collections extends Model { };
collections = sequelize.define('collections', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ref_no: { type: DataTypes.STRING, allowNull: false },
}, { paranoid: true });
business_items.belongsToMany(collectors, { through: collections });
collectors.belongsToMany(business_items, { through: collections });

business_items.hasMany(collections);
collections.belongsTo(business_items);
collections.belongsTo(collectors);
collectors.hasMany(contacts);
module.exports = collections;