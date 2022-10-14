
const express = require('express');
const UserController = require('./controller/userController')

const routes = express.Router();

    
routes.get('/', (req, res) => {
    res.json({conectado:'conectado meu truta'})
})

routes.post('/users', UserController.store )
    

module.exports = routes;