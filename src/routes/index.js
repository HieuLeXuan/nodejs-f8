// chuyển hết code về routes vào đây đây
const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
