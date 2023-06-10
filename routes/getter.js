const Controllers = require('../controllers/controls/control');
/** Saincraft-Api version II 
 *  This code is resposible with querying from db two level of relations from each join 
 *  This code is compatitle with sequelize "^6.29.0" nodels inputs
 *  Models have to be served as an object array where they can be served by their name as index this.models[name]; 
 *  Then let continue version 2.0
*/
const modelPath = '../database/models/module_exporter';
class Getter {
    constructor(req) {
        this._control = new Controllers(req);
        this.models = require(modelPath);
        this._req = req;
        this.response = {
            status: false,
            notification: 'failed! saincraftapi_v2.0',
            data: null,
            url: '',
            error: new Error(null)
        };
    }
    /** @bySaincraftTechnologies lab 
     * 
     * @returns 
     *  @example
     *  RETURN JSON() {
     * status :BOOLEAN, 
     * notification :STRING,
     * url :STRING,
     * data :JSON || JSON[]
     * }
     */
    async get_v2() {
        try {
            console.log(this._req.query.rel);
            switch (this._req.query.rel != undefined && this._req.query.rel != '') {
                case true:
                    switch (this._req.query.rel.includes(',')) {
                        case false:
                            var mainRelArray = [];
                            switch (this._req.query.rel.includes(' ')) {
                                case false:
                                    /** does not contain space */

                                    console.log('req.query.rel', this._req.query.rel.trim());
                                    mainRelArray.push({ model: this.models[this._req.query.rel.trim()] });
                                    console.log(mainRelArray);
                                    break;

                                default:
                                    /** first item contain space meaning it has a child relative */
                                    /** first item contain space meaning it has a child relative */
                                    let relativeInclude = { model: null };
                                    var grouparray = this._req.query.rel.split(' ');
                                    var me = '';
                                    /** split the spaces into an array */
                                    /** then loop through the items in the new array */
                                    grouparray.map(async (group2, x) => {
                                        if (x <= 0) {
                                            /**if the item is first item */
                                            console.log(group2)
                                            me = group2;
                                            relativeInclude.model = this.models[group2];
                                        } else {
                                            /** item here is not first items */
                                            if (!relativeInclude['include'] == undefined) {
                                                console.log('its not undefined!', relativeInclude['include']);
                                                relativeInclude['include'][0]['include'] = [{ model: this.models[group2] }];
                                            } else {
                                                console.log('its undefined!', relativeInclude);
                                                if (relativeInclude.length <= 0) {
                                                    relativeInclude['include'] = [];
                                                    relativeInclude['include'].push({ model: this.models[group2] });
                                                } else {
                                                    if (me == '', me == undefined) {
                                                        console.log('relative2 ====>>2', relativeInclude, me);
                                                        relativeInclude[0]['include'] = [{ model: this.models[group2] }];
                                                    } else {

                                                        console.log('relative2 ====>>21', relativeInclude, me);
                                                        relativeInclude['include'] = [{ model: this.models[group2] }];
                                                    }
                                                }
                                            }
                                        }
                                    });
                                    console.log('relative2 ====>>2', relativeInclude);
                                    mainRelArray.push(relativeInclude);
                                    break;
                            }

                            console.log('mainRel ===>>>', [...mainRelArray], this._req.params.model);
                            this.response.data = await (this._control.find(this._req.params.model, { include: [...mainRelArray] }));
                            this.response.url = this._reqbaseUrl + this._requrl;
                            this.response.notification = 'success fetching ' + this._req.params.model;
                            this.response.status = true;
                            return await this.response;
                            break;

                        default:
                            /** When the rel includes comma , */
                            console.log('it includes comma!1');

                            var reqRel = this._req.query.rel.split(',');
                            var mainRelArray = [];
                            reqRel.map(async (reqGroup, i) => {

                                if (i <= 0) {
                                    /** the first item in the array */
                                    console.log('reqGRoup====>>1', reqGroup);
                                    /** checks if the first item contains space */
                                    switch (reqGroup.includes(' ')) {
                                        case false:
                                            /** does not contain space */
                                            mainRelArray.push({ model: this.models[reqGroup] });
                                            break;

                                        default:
                                            /** first item contain space meaning it has a child relative */
                                            /** first item contain space meaning it has a child relative */
                                            let relativeInclude = { model: null };
                                            var grouparray = reqGroup.split(' ');
                                            var me = '';
                                            /** split the spaces into an array */
                                            /** then loop through the items in the new array */
                                            grouparray.map(async (group2, x) => {
                                                if (x <= 0) {
                                                    /**if the item is first item */
                                                    console.log(group2)
                                                    me = group2;
                                                    relativeInclude.model = this.models[group2];
                                                } else {
                                                    /** item here is not first items */
                                                    if (!relativeInclude['include'] == undefined) {
                                                        console.log('its not undefined!', relativeInclude['include']);
                                                        relativeInclude['include'][0]['include'] = [{ model: this.models[group2] }];
                                                    } else {
                                                        console.log('its undefined!', relativeInclude);
                                                        if (relativeInclude.length <= 0) {
                                                            relativeInclude['include'] = [];
                                                            relativeInclude['include'].push({ model: this.models[group2] });
                                                        } else {
                                                            if (me == '', me == undefined) {
                                                                console.log('relative2 ====>>2', relativeInclude, me);
                                                                relativeInclude[0]['include'] = [{ model: this.models[group2] }];
                                                            } else {

                                                                console.log('relative2 ====>>21', relativeInclude, me);
                                                                relativeInclude['include'] = [{ model: this.models[group2] }];
                                                            }
                                                        }
                                                    }
                                                }
                                            });
                                            console.log('relative2 ====>>2', relativeInclude);
                                            mainRelArray.push(relativeInclude);
                                            break;
                                            break;
                                    }
                                } else {
                                    /** other item in the array */
                                    /** checks if the other item contains space */
                                    if (!reqGroup == '' || !reqGroup == undefined) {
                                        console.log('reqGRoup====>>2', mainRelArray);
                                        switch (reqGroup.includes(' ')) {
                                            case false:
                                                /** does not contain space */
                                                mainRelArray.push({ model: this.models[reqGroup] });
                                                break;

                                            default:
                                                /** first item contain space meaning it has a child relative */
                                                let relativeInclude = { model: null };
                                                var grouparray = reqGroup.split(' ');
                                                var me = '';
                                                /** split the spaces into an array */
                                                /** then loop through the items in the new array */
                                                grouparray.map(async (group2, x) => {
                                                    if (x <= 0) {
                                                        /**if the item is first item */
                                                        console.log(group2)
                                                        me = group2;
                                                        relativeInclude.model = this.models[group2];
                                                    } else {
                                                        /** item here is not first items */
                                                        if (!relativeInclude['include'] == undefined) {
                                                            console.log('its not undefined!', relativeInclude['include']);
                                                            relativeInclude['include'][0]['include'] = [{ model: this.models[group2] }];
                                                        } else {
                                                            console.log('its undefined!', relativeInclude);
                                                            if (relativeInclude.length <= 0) {
                                                                relativeInclude['include'] = [];
                                                                relativeInclude['include'].push({ model: this.models[group2] });
                                                            } else {
                                                                if (me == '', me == undefined) {
                                                                    console.log('relative2 ====>>2', relativeInclude, me);
                                                                    relativeInclude[0]['include'] = [{ model: this.models[group2] }];
                                                                } else {

                                                                    console.log('relative2 ====>>21', relativeInclude, me);
                                                                    relativeInclude['include'] = [{ model: this.models[group2] }];
                                                                }
                                                            }
                                                        }
                                                    }
                                                });
                                                console.log('relative2 ====>>2', relativeInclude);
                                                mainRelArray.push(relativeInclude);
                                                break;
                                        }
                                    }

                                }
                            });
                            console.log('mainRel ===>>>', [...mainRelArray], this._req.params.model);
                            this.response.data = await (this._control.find(this._req.params.model, { include: [...mainRelArray] }));
                            this.response.url = this._reqbaseUrl + this._requrl;
                            this.response.notification = 'success fetching ' + this._req.params.model;
                            this.response.status = true;
                            return await this.response;
                    }

                default:

                    this.response.data = await (this._control.find(this._req.params.model, {}));
                    this.response.url = this._reqbaseUrl + this._requrl;
                    this.response.notification = 'success fetching ' + this._req.params.model;
                    this.response.status = true;
                    return await this.response;
                    break;
            }

        } catch (err) {
            console.log(err);
            return { status: false, notification: err.message, url: this._reqbaseUrl + this._requrl, data: null };
        }
    }
    post() {

    }
    delete() {

    }
}
module.exports = Getter;