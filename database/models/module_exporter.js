

const addresses = require("./systems/addresses");
const authentications = require("./systems/authentications");
// const certificates = require("./systems/certificates");
const contacts = require("./systems/contacts");
const countries = require("./systems/countries");
const currencies = require("./systems/currencies");
const regions = require("./systems/regions");
const roles = require("./systems/roles");
const users = require("./systems/users");
const { user_roles } = require("./users/user_roles");
const { user_contacts } = require("./users/user_contacts");
const { user_addresses } = require("./users/user_addresses");
const { contact_authentications } = require("./users/contact_authentications");
const applications = require("./systems/applications");
const uploads = require("./systems/uploads");
const locales = require("./systems/locales");
const presidencies = require("./governments/presidencies");
const financials = require("./governments/financials");
const certificates = require("./systems/certificates");
const identities = require("./systems/identities");
const identity_uploads = require("./system_properties/identity_uploads");
const disctrict = require("./governments/districts");
const disctrict_regulators = require("./districts/district_regulators");
const agencies = require("./governments/agencies");
const coorperations = require("./governments/coorperations");
const manicipals = require("./governments/manicipals");
const organisations = require("./governments/organisations");
const ministries = require("./governments/ministries");
const ministry_agencies = require("./ministries/ministry_agencies");
const streets = require("./governments/streets");
const villages = require("./governments/villages");
const wards = require("./governments/wards");
const business_categories = require("./businesses/business_categories");
const business_charges = require("./businesses/business_charges");
const business_provisions = require("./businesses/business_provisions");
const businesses = require("./businesses/businesses");
const charge_categories = require("./charges/charge_categories");
const charge_items = require("./charges/charge_items");
const charges = require("./charges/charges");
const item_categories = require("./charges/item_categories");
const items = require("./charges/items");
const menus = require('./systems/menus');
const { role_menus } = require("./roles/role_menus");
const { role_permissions } = require("./roles/role_permissions");
const permissions = require("./systems/permissions");

module.exports = {
    permissions,
    role_menus,
    role_permissions,
    menus,
    item_categories,
    items,
    charge_categories,
    charge_items,
    charges,
    business_categories,
    business_charges,
    business_provisions,
    businesses,
    agencies,
    coorperations,
    disctrict,
    manicipals,
    organisations,
    ministries,
    ministry_agencies,
    streets,
    villages,
    wards,
    presidencies,
    financials,
    certificates,
    identities,
    identity_uploads,
    disctrict,
    disctrict_regulators,
    applications,
    locales,
    uploads,
    contact_authentications,
    roles,
    users,
    user_addresses,
    user_contacts,
    user_roles,
    regions,
    contacts,
    currencies,
    countries,
    addresses,
    authentications,
    // certificates
}
