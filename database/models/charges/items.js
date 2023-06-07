const { Model, DataTypes, sequelize } = require("../../mysql");
const item_categories = require("./item_categories");
/** charge item gari, nyama,  */
class items extends Model { };
items = sequelize.define('items', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
}, { paranoid: true });
items.belongsTo(item_categories);
item_categories.hasMany(items);

module.exports = items;