const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
/** charge categories example ushuru, fine,  */
class item_categories extends Model { };
item_categories = sequelize.define('item_categories', {
    id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: { type: DataTypes.STRING },
    qty: { type: DataTypes.INTEGER },
    description: {
        type: DataTypes.STRING
    }
}, { paranoid: true });
module.exports = item_categories;