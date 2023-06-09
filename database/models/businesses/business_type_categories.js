const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
const businesses = require("./businesses");
const categories = require("../system_properties/categories");
const business_types = require("./business_types");
class business_type_categories extends Model { };
business_type_categories = sequelize.define('business_type_categories', {
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
    description: {
        type: DataTypes.STRING
    }
}, { paranoid: true });

business_types.belongsToMany(categories, { through: business_type_categories });
categories.belongsToMany(business_types, { through: business_type_categories });
business_types.hasMany(business_type_categories);
business_type_categories.belongsTo(business_types);
categories.hasMany(business_type_categories);
business_types.belongsTo(categories);
business_type_categories.belongsTo(businesses);
businesses.hasMany(business_type_categories);

module.exports = business_type_categories;