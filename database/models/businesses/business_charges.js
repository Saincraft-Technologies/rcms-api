const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
const business_categories = require("./business_categories");
const charge_items = require("../charges/charge_items");
/** charge categories example ushuru, fine,  */
class business_charges extends Model { };
business_charges = sequelize.define('business_charges', {
    id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true
    }
}, { paranoid: true });
business_categories.belongsToMany(charge_items, { through: business_charges });
charge_items.belongsToMany(business_categories, { through: business_charges });

business_charges.belongsTo(business_categories);
business_charges.belongsTo(charge_items);
charge_items.hasMany(business_charges);
business_categories.hasMany(business_charges)
module.exports = business_charges;