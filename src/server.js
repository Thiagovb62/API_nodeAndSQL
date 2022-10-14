const routes = require('./routes');
const express = require('express');

require("./database/index")

const app = express();

app.use(express.json());
app.use(routes);
    
app.listen(3000)