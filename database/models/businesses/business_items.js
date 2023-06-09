const { Model, DataTypes, sequelize } = require("../../mysql");
const businesses = require("./businesses");
const item_categories = require('../items/item_categories');
class business_items extends Model { };
business_items = sequelize.define('business_items', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
}, { paranoid: true });
businesses.belongsToMany(item_categories, { through: business_items });
item_categories.belongsToMany(businesses, { through: business_items });
business_items.belongsTo(businesses);
business_items.belongsTo(item_categories);
businesses.hasMany(business_items);
item_categories.hasMany(business_items);

module.exports = business_items;