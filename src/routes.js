
const express = require('express');
const UserController = require('./controller/userController')
const AdressController = require('./controller/adressController')

const routes = express.Router();

    
routes.get('/users',UserController.show);
routes.post('/users', UserController.store )
    
routes.get('/users/:user_id/addresses', AdressController.show)
routes.post('/users/:user_id/addresses', AdressController.store)

module.exports = routes;