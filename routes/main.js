const express = require('express');
const router = express.Router();
const models = require('../database/models/module_exporter');
const { Op } = require('../database/mysql');
const Controllers = require('../controllers/controls/control');
// const requestor = require('../controllers/requestor');
const key = process.env.D_API_KEY;


router.get('/:model/list', async (req, res) => {
    // req.user
    const control = new Controllers(req);
    // console.log('queries:::', new requestor(req));

    try {
        if (req.query.rel != undefined && req.query.rel != '') {
            let modelz = req.query.rel.split(',');
            var relationsArray = [];
            for (let model of modelz) {
                relationsArray.push({ model: models[model] });
            }
            return res.status(200).json({ status: true, notification: 'success fetching ' + req.params.model, url: req.baseUrl + req.url, data: await (control.find(req.params.model, { include: relationsArray })) });
        }
        return res.status(200).json({ status: true, notification: 'success fetching ' + req.params.model, url: req.baseUrl + req.url, data: await (control.find(req.params.model, {})) });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: false, notification: err.message, url: req.baseUrl + req.url, data: null });
    }
});
router.get('/:model/:id', async (req, res) => {
    const control = new Controllers(req);
    try {

        if (req.query.rel != undefined && req.query.rel != '') {
            let modelz = req.query.rel.split(',');
            var relationsArray = [];
            for (let model of modelz) {
                relationsArray.push({ model: models[model] });
            }
            let data = await control.single(req.params.model, { where: { id: req.params.id }, include: relationsArray });
            if (data) {
                return res.status(200).json({ status: true, notification: 'successfully queried ' + req.params.model, url: req.baseUrl + req.url, data: data });
            }
            return res.status(403).json({ status: false, notification: 'no data found!', data: null });
        }

        let data = await control.single(req.params.model, { where: { id: req.params.id } });
        if (data) {
            return res.status(200).json({ status: true, notification: 'successfully queried ' + req.params.model, url: req.baseUrl + req.url, data: data });
        }
        return res.status(403).json({ status: false, notification: 'no data found!', data: null });
        // return res.status(200).json({ status: true, notification: 'successfully queried ' + req.params.model, url: req.baseUrl + req.url, data: await models[req.params.model].findOne({ where: { id: req.params.id } }) });
    } catch (err) {
        console.log(err);
        return res.status(403).json({ status: false, notification: err.message, url: req.baseUrl + req.url, data: null });
    }
});
router.get('/deleted/:model/list', async (req, res) => {
    const control = new Controllers(req);
    try {

        if (req.query.rel != undefined && req.query.rel != '') {
            let models = req.query.rel.split(',');
            var relationsArray = [];
            for (let model of models) {
                relationsArray.push({ model: models[model] });
            }
            return res.status(200).json({ status: true, notification: 'successfully queried ' + req.params.model, data: await control.find(req.params.model, { where: { deletedAt: { [Op.not]: null } }, include: relationsArray, paranoid: false }) });
        }
        return res.status(200).json({ status: true, notification: 'successfully queried ' + req.params.model, data: await control.find(req.params.model, { where: { deletedAt: { [Op.not]: null } }, paranoid: false }) });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: false, notification: err.message, data: null });
    }
});
router.post('/:model/create', async (req, res) => {
    const control = new Controllers(req);
    try {
        console.log(req.body);
        return res.status(200).json({ status: true, notification: 'successfully saved ' + req.params.model, data: await control.create(req.params.model, req.body), error: null });
    } catch (err) {
        console.log(req.body);
        return res.status(500).json({ status: false, notification: 'failed to saved ' + req.params.model, data: null, error: err.message });
    }
});

router.delete('/:model/:id', async (req, res) => {
    const control = new Controllers(req);
    try {
        return res.status(200).json({
            status: true, notification: 'successfully deleted ' + req.params.model,
            data: await control.delete(req.params.model, { where: { id: req.params.id } })
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: false, notification: err.message, data: null });
    }
});

router.patch('/:model/:id', async (req, res) => {
    const control = new Controllers(req);
    try {
        return res.status(200).json({
            status: true, notification: 'successfully patched ' + req.params.model,
            data: await control.update(req.params.model, req.body, { where: { id: req.params.id } })
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: false, notification: err.message, data: null });
    }
});
module.exports = router;