const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
require('dotenv').config();

//banco de dados
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const LoginRoutes = require('./routes/login')
const RegisterRoutes = require('./routes/register')
const newProduct= require('./routes/products')
const DB_USERNAME = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;


const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
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


//rotas da aplicação com validação

app.use('/', LoginRoutes )
app.use('/', RegisterRoutes)
app.use('/', newProduct)


app.listen(PORT, () => {
    console.log('Server is running');
})
