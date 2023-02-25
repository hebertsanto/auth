const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
require('dotenv').config();


//banco de dados
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const LoginRoutes = require('./routes/login')
const RegisterRoutes = require('./routes/register')

const DB_USERNAME = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;


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
app.use('/', LoginRoutes)
app.use('/', RegisterRoutes)
app.get('/', (req, res) => {

    res.json({
        message:'ola mundo'
    })
    
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
