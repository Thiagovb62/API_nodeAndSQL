
const express = require('express');

const routes = express.Router();

    
routes.get('/', (req, res) => {
    res.json({conectado:'conectado meu truta'})
})
module.exports = routes;