const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
require('dotenv').config();


const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const LoginRoutes = require('./routes/login')


const DB_USERNAME = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

mongoose.connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASS}@logincluster.b4mqpay.mongodb.net/?retryWrites=true&w=majority`
)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
   console.log(err);
})



app.use('/', LoginRoutes )

app.listen(3300, () => {
    console.log('Server is running');
})
