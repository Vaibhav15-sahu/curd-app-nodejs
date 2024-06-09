const express = require('express');
const app = express();

require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongodb = require('./db');

const userRoutes = require('./routers/userRoutes');
app.use('/user', userRoutes);

const port = process.env.PORT ;
app.get('/', (req, res) => res.send('Hello! This is a basic application to perform the CURD operations.'));

app.listen(port, () => console.log(`App listening on port ${port}!`)); 