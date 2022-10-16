const express = require('express');
const UserController = require('./controller/userController')
const AdressController = require('./controller/AdressController')
const TechsController = require('./controller/TechController')
const ReportController = require('./controller/ReportController')

const routes = express.Router();


routes.get('/users', UserController.show);
routes.post('/users', UserController.store)
routes.delete('/users/:user_id', UserController.delete)


routes.get('/users/:user_id/addresses', AdressController.show)
routes.post('/users/:user_id/addresses', AdressController.store)
routes.delete('/users/:user_id/addresses', AdressController.delete)

routes.get('/users/:user_id/techs', TechsController.show)
routes.post('/users/:user_id/techs', TechsController.store)
routes.delete('/users/:user_id/techs', TechsController.delete)


routes.get('/report', ReportController.show)

module.exports = routes;