const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app =express();

const mysql = require('mysql');
const bodyParser = require('body-parser');
const myConnection = require('express-myconnection');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');
const config = require('./config');

const home = require('./routes/home');
const seller = require('./routes/seller');
const buyer = require('./routes/buyer');

const dbOptions = {

    host:      config.database.host,
    user:      config.database.user,
    password : config.database.password,
    database:  config.database.db
};

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method
    }
}));

app.use(expressValidator());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(myConnection(mysql, dbOptions, 'pool'));

app.use('/', home);
app.use('/seller', seller);
app.use('/buyer', buyer);

app.listen(PORT, () => console.log(`CSELL Port running on ${PORT}!`));
