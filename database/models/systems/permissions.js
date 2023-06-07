const { Model, sequelize, DataTypes } = require("../../mysql");
class permissions extends Model { };
permissions = sequelize.define('permissions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linux_permission_code: {
        type: DataTypes.STRING
    },
    descriptions: {
        type: DataTypes.STRING,
    }
}, { paranoid: true });
module.exports = permissions;
