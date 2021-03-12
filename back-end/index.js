const express = require('express');
const app = express();
const port = 3001;

const RegisterRouter = require('./routes/RegisterRouter');

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/register', RegisterRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))