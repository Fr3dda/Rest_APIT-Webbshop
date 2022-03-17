const router = require('express').Router();
const productModel = require('../models/products/productModel');
//Hämta alla produkter
/* router.get('/', ) */

//Hämta en produkt med ID
router.get('/:id')

//Skapa en ny produkt
router.post('/', productModel.createProduct);

//Uppdatera en produkt
/* router.patch('/:id') */

//Radera en produkt
/* router.delete('/:id') */


module.exports = router;

'http://localhost:9999/api/products'