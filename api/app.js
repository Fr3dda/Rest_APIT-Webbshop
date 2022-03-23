const express = require('express');
const app = express();
const cors = require('cors')

const productController = require('./controllers/ProductControllers')



// MIDDLEWARE

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CONTROLLERS

app.use('/api/products', productController);


module.exports = app
