const { apiLimit, hasToken } = require('./passport/passport');
const SaincraftAPI_v2_0 = require('./routes/getter');


module.exports = async (app) => {
    let api = await new SaincraftAPI_v2_0();
    await app.use('/', require('./routes/landing'));
    await app.use('/auth', require('./routes/auth'));
    await app.use('/api', require('./routes/main'));
    // await app.use('/v1', );
    await app.use('/menus', require('./routes/menus'));
}