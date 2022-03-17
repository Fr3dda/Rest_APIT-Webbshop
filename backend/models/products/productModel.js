const { exists } = require('./productSchema');
const Product = require('./productSchema');





exports.createProduct = (req, res) => {

    Product.exists({ name: req.body.name}, (err, result) => {

        if(err) {
            return res.status(500).json(err)

        }

        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product by that name already exists, please update product instead.'
            })
        }

        /* Product.create({}) */

        Product.create({
            name:   req.body.name,
            short:  req.body.short,
            desc:   req.body.desc,
            price:  req.body.price,
            image:  req.body.image
        })
        .then((data) => {
            res.status(201).json({
                StatusCode: 201,
                status: true,
                message: 'Product created with not a single problem',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                StatusCode: 500,
                status: false,
                message: 'Product did not manage to be created. What\'s up? ',
                err
            })
        })
    })
     
}