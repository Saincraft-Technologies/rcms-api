const { UUIDV4 } = require("sequelize");
const { Model, DataTypes, sequelize } = require("../../mysql");
const businesses = require("./businesses");
const streets = require('../governments/streets');
/** charge categories example ushuru, fine,  */
class business_surveys extends Model { };
business_surveys = sequelize.define('business_surveys', {
    id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true
    },
    provider: { type: DataTypes.ENUM('government', 'private') },
    condition: {
        type: DataTypes.ENUM('undefined', 'worse', 'bad', 'okay', 'good', 'better', 'best'),
        defaultValue: 'okay'
    },
    comment: {
        type: DataTypes.STRING,
    }
}, { paranoid: true });
business_surveys.belongsTo(businesses);
businesses.hasMany(business_surveys);
business_surveys.belongsTo(streets);
streets.hasMany(business_surveys);

module.exports = business_surveys;