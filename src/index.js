const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

// Connect DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

// create "middleware"
app.use(morgan('combined'));

// template engine
app.engine('hbs', engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routers - route
route(app);

app.listen(port, () => {
    console.log(`Welcome to nodejs-express course at port ${port}`);
})
