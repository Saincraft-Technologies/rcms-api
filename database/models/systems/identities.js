const { UUIDV4 } = require("sequelize");
const { Model, Sequelize, sequelize } = require("../../mysql");
const regulators = require("./regulators");
class identities extends Model { };
identities = sequelize.define('identities', {
    id: {
        type: Sequelize.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true
    },
    id_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    issue_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    expire_date: {
        type: Sequelize.DATE,
    },
}, { paranoid: true });
identities.belongsTo(regulators);
regulators.hasMany(identities);
module.exports = identities;