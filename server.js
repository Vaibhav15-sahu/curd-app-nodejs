const express = require('express');
const app = express();

require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongodb = require('./db');

const User = require('./models/user');

const port = process.env.PORT ;

app.get('/', (req, res) => res.send('Hello! This is a basic application to perform the CURD operations.'));

app.get('/user', async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({"error" : "Internal Server Error!x"})
    }
})

app.post('/user', async (req, res) => {
    try{
        const userData = req.body;
        const newUser = new User(userData);
        
        const response = await newUser.save();
        console.log("Data Saved!");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({"error" : "Internal Server Error!"});
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`)); 