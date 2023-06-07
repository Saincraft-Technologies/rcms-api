const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
/** charge categories example ushuru, fine,  */
class charge_categories extends Model { };
charge_categories = sequelize.define('charge_categories', {
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
    description: {
        type: DataTypes.STRING
    }
}, { paranoid: true });
module.exports = charge_categories;