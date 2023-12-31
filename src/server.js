require('dotenv').config({path:'../config.env'});
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const routes = require('./rotas');
const server = express();
server.use(cors());
server.use(bodyparser.urlencoded({extended:false}));
server.use('/api',routes)
server.listen(process.env.PORT, ()=> {
   console.log('SERVER IS RUNNING IN PORT '+process.env.PORT);
});