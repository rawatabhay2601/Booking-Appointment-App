const express = require('express');
const app = express();
const bookingRoute = require('./routes/booking-app');
const cors =  require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./models/booking-users');

app.use(cors());
app.use(bodyParser.json());

app.use(bookingRoute);

sequelize.sync()
    .then(() => {
        app.listen(4000);
    })
    .catch(err => console.log(err));