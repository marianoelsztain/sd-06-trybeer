const express = require('express');
const LoginController = require('./src/controllers/LoginController');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/login', LoginController);

app.listen(port, () => console.log(`Running at ${port}`));