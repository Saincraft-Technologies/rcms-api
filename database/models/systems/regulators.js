const { Model, Sequelize, sequelize } = require("../../mysql");
const uploads = require("./uploads");
class regulators extends Model { };
regulators = sequelize.define('regulators', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    identifier: {
        type: Sequelize.STRING
    },
    id_length: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
    },
}, { paranoid: true });
regulators.belongsTo(uploads);
uploads.hasMany(regulators);
module.exports = regulators;