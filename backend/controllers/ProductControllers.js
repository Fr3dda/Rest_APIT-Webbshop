const router = require('express').Router();
const productModel = require('../models/products/productModel');
//Hämta alla produkter
router.get('/', productModel.getProducts);

//Hämta en produkt med ID
router.get('/:id', productModel.getProductById);

//Skapa en ny produkt
router.post('/', productModel.createProduct);

//Uppdatera en produkt
router.patch('/:id', productModel.updateProduct);
router.put('/:id', productModel.updateProduct);

//Radera en produkt
router.delete('/:id', productModel.deleteProduct);


module.exports = router;

'http://localhost:9999/api/products'