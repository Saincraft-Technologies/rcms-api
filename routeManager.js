const { apiLimit, hasToken } = require('./passport/passport');


module.exports = async (app) => {
    await app.use('/backend', require('./routes/landing'));
    await app.use('/auth', require('./routes/auth'));
    await app.use('/api', require('./routes/main'));
}