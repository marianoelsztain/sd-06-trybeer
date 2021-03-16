const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const loginController = require('./controllers/loginControllers');
const registerController = require('./controllers/registerController');
const productsController = require('./controllers/productsControllers');

const error = require('./middlewares/error');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', loginController);

app.use('/register', registerController);

app.use('/products', productsController);

app.use('/images', express.static(path.resolve(__dirname, 'images')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(error);