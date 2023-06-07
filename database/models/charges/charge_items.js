const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
/** charge categories example ushuru, fine,  */
const charge_categories = require('./charge_categories');
const financials = require("../governments/financials");
const item_categories = require("./item_categories");
class charge_items extends Model { };
charge_items = sequelize.define('charge_items', {
    id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.ENUM('daily', 'weekly', 'annually', 'monthly', 'once'),
        defaultValue: 'once',
        allowNull: false
    }
}, { paranoid: true });
charge_categories.belongsToMany(item_categories, { through: charge_items });
item_categories.belongsToMany(charge_categories, { through: charge_items });

charge_items.belongsTo(item_categories);
item_categories.hasMany(charge_items);
charge_items.belongsTo(charge_categories)
charge_categories.hasMany(charge_items);

financials.belongsTo(charge_categories);
charge_categories.hasMany(financials);
module.exports = charge_items;