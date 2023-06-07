const models = require("../models/module_exporter");

const MAIN = [];
var main = {
    indexes: [],
    lists: []
};
// roles
main.indexes.push([`role`]);
main.lists.push([['superadmin'], ['admin'], ['employer'], ['employee'], ['generic']]);
MAIN.push([models.roles, main]);
main = {
    indexes: [],
    lists: []
};
main.indexes.push([`display_name`, `route_name`, `parent`, `icon`, 'superadmin', 'admin', 'employer', 'employee', 'is_addon', 'sort_order', 'unique_identifier']);
main.lists.push([
    ['Super-admin', '#', 0, 'mdi mdi-account-cog', null, 0, null],
    ['Dashboard', '#', 0, 'mdi mdi-store', null, 0, null],
    ['Settings', '#', 0, 'mdi mdi-cog', null, 0, null],
    ['Menus', '/menus', 3, 'mdi mdi-order-bool-descending-variant', null, 0, null],
    ['Language', '/locales', 3, 'mdi mdi-yen', null, 0, null],
]);
MAIN.push([models.menus, main]);
main = {
    indexes: [],
    lists: []
};

// languages
main.indexes.push([`name`, 'language', 'language_abbr']);
main.lists.push([['US', 'English', 'en'], ['TZ', 'Swahili', 'sw']]);
MAIN.push([models.locales, main]);
main = {
    indexes: [],
    lists: []
};
// sessions
main.indexes.push([`name`, 'start', 'active']);
main.lists.push([[new Date().getFullYear(), new Date().toISOString(), 1]]);
MAIN.push([models.financials, main]);
main = {
    indexes: [],
    lists: []
};
// countries
main.indexes.push([`name`, 'initial', 'zip']);
main.lists.push([['United Republic of Tanzania', 'TZ', '+255']]);
MAIN.push([models.countries, main]);
main = {
    indexes: [],
    lists: []
};
// regions
main.indexes.push([`name`, 'code']);
main.lists.push([['Arusha', '30'], ['Kilimanjaro', '22'], ['Dar es salaam', '22'], ['Mwanza', '22'], ['Morogoro', '22'], ['Tanga', '22'], ['Mbeya', '22'], ['Iringa', '22'], ['Dodoma', '22'], ['Tabora', '22'], ['Mtwara', '22'], ['Manyara', '22']]);
MAIN.push([models.regions, main]);
main = {
    indexes: [],
    lists: []
};
// currencies
main.indexes.push([`name`, 'code', 'symbol']);
main.lists.push([['Tanzanian Shillings', 'TZS', '/=']]);
MAIN.push([models.currencies, main]);
main = {
    indexes: [],
    lists: []
};
// user
main.indexes.push([`name`, 'email', 'password', 'gender', 'birthdate', 'phone', 'address']);
main.lists.push([
    ['Gideon Sainyeye', 'gsainyeye@gmail.com', '@73N@', 'MALE', '1991-07-07', '+255658598333', 'P.O.Box 123'],
    ['Johnson Mollel', 'johnsonmollel@outlook.com', '@73N@', 'MALE', '1998-05-17', '+255755220249', 'P.O.Box 123'],
]);
MAIN.push([models.users, main]);
main = {
    indexes: [],
    lists: []
};
// applications
main.indexes.push([`app_name`, 'organisation_name', 'app_route', 'email', 'phone', 'key', 'app_secret', 'code', 'ip_address', 'response_format']);
main.lists.push([
    ['rcms-api', 'saincraft technologies', 'https://rcsm-api.builds.saincrafttechnologies.com', 'gsainyeye@gmail.com', '658598333', 'iuuhUYHyuhyrhg7357824hhfh8f2f8248g87fp', 'lkij95t8vg0g958ghdfld03ir69gtjfkeurnfi4', '247', '::1', 'json']
]);
MAIN.push([models.applications, main]);


module.exports = MAIN;