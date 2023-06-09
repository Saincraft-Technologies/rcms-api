const { apiLimit } = require('./passport/passport');


module.exports = async (app) => {

    await app.use('/', require('./routes/landing'));
    await app.use('/auth', require('./routes/auth'));
    await app.use('/api', require('./routes/main'));
    // await app.use('/v1', );
    await app.use('/menus', require('./routes/menus'));
}