const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
const items = require("./items");
const categories = require("../system_properties/categories");
const charge_categories = require('../charges/charge_categories');
/** charge categories example ushuru, fine,  */
class item_categories extends Model { };
item_categories = sequelize.define('item_categories', {
    id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: { type: DataTypes.STRING },
    qty: { type: DataTypes.INTEGER },
    description: {
        type: DataTypes.STRING
    }
}, { paranoid: true });
items.belongsToMany(categories, { through: item_categories });
categories.belongsToMany(items, { through: item_categories });
items.hasMany(item_categories);
item_categories.belongsTo(items);
categories.hasMany(item_categories);
item_categories.belongsTo(categories);
item_categories.belongsTo(charge_categories);
charge_categories.hasMany(item_categories);
module.exports = item_categories;