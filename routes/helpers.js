const { Sequelize } = require("sequelize");
const { pluralize } = require("../controllers/controls/service");

module.exports = {
    menus: async (models) => {
        console.log('mbona niko hapa!');
        let main = JSON.parse(JSON.stringify(await models.roles.findAll({ include: { model: models.menus } })));
        let sub_menu = [];
        let menu_main = [];
        for (const role of main) {
            if (role.role == 'superadmin') {
                for (const menu of role.menus) {
                    if (menu.parent != 0) {
                        sub_menu.push(menu);
                    } else {
                        menu_main.push(menu);
                    }
                }
            }
        }
        return { sub_menu, menu_main };
    },
    normal_query: async (req, models) => {
        const db_query_includes = [];
        const extra_headers = [];
        const model = req.params.model;
        switch (model.includes('_')) {
            case true:
                /** model include underscore _ */
                let _models = model.split('_');
                let modelA = pluralize(_models[0]);
                let modelB = _models[1];
                db_query_includes.push({ model: models[modelA] });
                db_query_includes.push({ model: models[modelB] });
                extra_headers.push(modelA);
                extra_headers.push(modelB);
                break;

            default:
                break;
        }

        return [db_query_includes, extra_headers];
    },
    create_builder: async (req) => {
        const models = [];
        console.log('helper parameters ===>>>>>', await req.params);
        if (req.params.model.includes('_')) {
            let builders = req.params.model.split('_');
            for (let i = 0; i < builders.length; i++) {
                if (i <= 0) {
                    models.push(pluralize(builders[i]));
                } else {

                    models.push(builders[i]);
                }
            }
        }
        return models;
    }

}