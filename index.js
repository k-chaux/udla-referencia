const mongoose = require('mongoose');
require('./config/db');

const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


require('dotenv').config({ path: 'variables.env' });


//app de express
const app = express();

// habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// habilitar handlebars como view
app.engine('handlebars',
    exphbs({
        defaultLayout: 'layout'
        //helpers: require('./helpers/handlebars')
    })
);
app.set('view engine', 'handlebars');

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));



// Router
app.use('/', routes());

app.listen(process.env.PUERTO);
