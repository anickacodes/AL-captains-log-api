const express = require('express');
const app = express();
const logController = require("./models/log.js");

app.use(express.json()) //parse incoming middleware
app.use('/logs', logController) 
