const { Model, sequelize, DataTypes } = require("../../mysql");
const users = require("./users");
class applications extends Model { };
applications = sequelize.define('applications', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    app_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    organisation_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    app_route: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    app_secret: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ip_address: {
        type: DataTypes.STRING,
    },
    response_format: {
        type: DataTypes.ENUM('json', 'xml'),
        defaultValue: 'json'
    }
}, { paranoid: true });
applications.belongsTo(users);
users.hasMany(applications);
module.exports = applications;
