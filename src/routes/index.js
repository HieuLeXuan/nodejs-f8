// chuyển hết code về routes vào đây đây
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
