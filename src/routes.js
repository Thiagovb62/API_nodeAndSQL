
const express = require('express');
const UserController = require('./controller/userController')
const AdressController = require('./controller/AdressController')
const TechsController = require('./controller/TechController')

const routes = express.Router();

    
routes.get('/users',UserController.show);
routes.post('/users', UserController.store )
    
routes.get('/users/:user_id/addresses', AdressController.show)
routes.post('/users/:user_id/addresses', AdressController.store)

routes.get('/users/:user_id/techs', TechsController.show)
routes.post('/users/:user_id/techs', TechsController.store)
routes.delete('/users/:user_id/techs', TechsController.delete)

module.exports = routes;