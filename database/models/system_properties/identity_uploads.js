const { Model, DataTypes, sequelize } = require("../../mysql");
const uploads = require("../systems/uploads");
const identities = require("../systems/identities");
class identity_uploads extends Model { };
identity_uploads = sequelize.define('identity_uploads', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
}, { paranoid: true });
identities.belongsToMany(uploads, { through: identity_uploads });
uploads.belongsToMany(identities, { through: identity_uploads });

identity_uploads.belongsTo(identities);
identities.hasMany(identity_uploads);

identity_uploads.belongsTo(uploads);
uploads.hasMany(identity_uploads)

module.exports = identity_uploads;