const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
const charges = require("./charges");
const categories = require("../system_properties/categories");
/** charge categories example ushuru, fine,  */
class charge_categories extends Model { };
charge_categories = sequelize.define('charge_categories', {
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
charges.belongsToMany(categories, { through: charge_categories });
categories.belongsToMany(charges, { through: charge_categories });
charges.hasMany(charge_categories);
charge_categories.belongsTo(charges);
categories.hasMany(charge_categories);
charge_categories.belongsTo(categories);


module.exports = charge_categories;