const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')


const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController')

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/employees', employeeController);


app.listen(3000, ()=> console.log("connection stablished port 3000"))