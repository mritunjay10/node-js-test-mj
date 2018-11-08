const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');

const home = require('./routes/home');
const buyer = require('./routes/user');



app.use(expressValidator());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method
    }
}));

app.use('/', home);
app.use('/user', buyer);

app.listen(PORT, () => console.log(`CSELL Port running on ${PORT}!`));
