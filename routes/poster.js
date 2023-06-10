const Controllers = require('../controllers/controls/control');
const models = require('../database/models/module_exporter')
/** Saincraft-Api version II 
 *  This code is resposible with querying from db two level of relations from each join 
 *  This code is compatitle with sequelize "^6.29.0" nodels inputs
 *  Models have to be served as an object array where they can be served by their name as index models[name]; 
 *  Then let continue version 2.0
*/
class Getter {
    constructor(req) {
        this._control = new Controllers(req);
        this._req = req;
        this.response = {
            status: false,
            notification: 'failed! Powered by saincraft!',
            data: null,
            url: '',
            error: new Error(null)
        };
    }
    async post_v2() {

        try {
            this.response.data = await (this._control.create(this._req.params.model, this._req.body));
            this.response.status = true;
            this.response.notification = 'successfully added ', this._req.params.model;
            return this.response;
        } catch (err) {
            console.log(err);
            this.response.status = false;
            this.response.notification = err.message;
            this.response.url = this._req.url;
            this.response.data = null;

            return this.response;
        }
    }
    async post() {
        try {
            this.response.data = await (this._control.create(this._req.params.model, this._req.body));
            this.response.status = true;
            this.response.notification = 'successfully added ', this._req.params.model;
            return this.response;
        } catch (err) {
            console.log(err);
            this.response.status = false;
            this.response.notification = err.message;
            this.response.url = this._req.url;
            this.response.data = null;

            return this.response;
        }
    }
    delete() {

    }
}
module.exports = Getter;