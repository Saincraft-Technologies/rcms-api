const express = require('express');
const router = express.Router();
const models = require('../database/models/module_exporter');
const { Op } = require('../database/mysql');
const Controllers = require('../controllers/controls/control');
const { isLoggedIn } = require('../passport/passport');
const { user } = require('../multipart/multerConfig')
router.get('/', isLoggedIn, async (req, res) => {
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

    res.render('empty', { menus: menu_main, sub_menu: sub_menu });
})
router.get('/dashboard', isLoggedIn, async (req, res) => {

    const control = new Controllers(req);
    let data = await (await control.find('applications', {}));
    console.log(await data);
    res.render('dashboard', { layout: false, applications: data })
});
router.post('/applications/create', isLoggedIn, user().none(), async (req, res) => {

    const control = new Controllers(req);
    console.log('requested body', req.body);
    try {
        let data = req.body;
        data['userId'] = req.session.passport.user.id;
        data['code'] = Math.round(Math.random() * 1000000);
        console.log(data);
        let newData = await control.create('applications', req.body);
        console.log('==========>>>>>>>', newData)
        res.status(200).json({ status: true, notification: 'successfully added!', data: await newData });
    } catch (error) {
        res.status(500).json({ status: false, notification: 'error' + error.message })
    }
    // let data = await (await control.create('applications', req.body));
    // console.log(await data);
    // res.render('dashboard', { layout: false, applications: data })
});
router.get('/applications/list', isLoggedIn, async (req, res) => {
    const control = new Controllers(req);

    let data = await (await control.single('users', { where: { id: req.session.passport.user.id }, include: { model: models['applications'] } }));
    console.log(await data);
    res.render('partials/applications', { layout: false, applications: data.applications })
});


module.exports = router;