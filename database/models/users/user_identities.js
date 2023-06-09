// const { passwordHash } = require("../../../backend/controllers/services/service");
const { sequelize, DataTypes, Model } = require("../../mysql");
const identities = require('../systems/identities');
const users = require('../systems/users');
class user_identities extends Model { };
user_identities = sequelize.define('user_identities', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },

}, { paranoid: true });
identities.belongsToMany(users, { through: user_identities });
users.belongsToMany(identities, { through: user_identities });
user_identities.belongsTo(identities);
user_identities.belongsTo(users);
identities.hasMany(user_identities);
users.hasMany(user_identities)

module.exports = user_identities;