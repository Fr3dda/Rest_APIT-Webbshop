const User = require('./userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../../authentication/auth');

exports.registerUser = (req, res) => {
    User.exists({ email: req.body.email}, (err, result) => {
        
        if(err) {
            return res.status(400).json ({
                statusCode: 400, 
                status: false,
                message: 'Sorry, that\'s a bad request',
                err
            })
        }
        if(result){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Sorry, that email is already taken...',
            })
        }

        const salt = bcrypt.genSaltSync(10);

        bccrypt.hash(req.body.password, salt, (err, hash) => {
         if(err) {
            return res.status(500).json({
                statusCode: 500, 
                status: false,
                message: 'The encryption failed to manage password...',
            })
         }
            

        User.create({
            firstName:      req.body.firstName,
            lastName:       req.body.lastName,
            email:          req.body.email,
            passwordHash:   hash
        })
        
        .then(user => {
            res.status(201).json({
              statusCode: 201,
              status: true,
              message: 'User was created successfully',
              token: auth.generateToken(user)
            })
          })
          .catch(err => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed to create user',
              err
            })
        })
    })
})
}