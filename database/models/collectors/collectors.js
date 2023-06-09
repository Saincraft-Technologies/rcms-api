const { Model, DataTypes, sequelize } = require("../../mysql");
const employers = require("../employers/employers");
const contacts = require('../systems/contacts');

/** charge item gari, nyama,  */
class collectors extends Model { };
collectors = sequelize.define('collectors', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ref_no: { type: DataTypes.STRING },
}, { paranoid: true });
contacts.belongsToMany(employers, { through: collectors });
employers.belongsToMany(contacts, { through: collectors });

contacts.hasMany(collectors);
collectors.belongsTo(contacts);
collectors.belongsTo(employers);
employers.hasMany(contacts);
module.exports = collectors;