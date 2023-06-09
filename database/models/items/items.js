const { Model, DataTypes, sequelize } = require("../../mysql");
/** charge item gari, nyama,  */
class items extends Model { };
items = sequelize.define('items', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    descriptions: { type: DataTypes.STRING }
}, { paranoid: true });

module.exports = items;