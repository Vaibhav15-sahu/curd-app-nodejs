const express = require('express');
const route = express.Router();
const User = require('./../models/user');

route.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({"error" : "Internal Server Error!x"})
    }
});

route.post('/', async (req, res) => {
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
});

route.put('/:id', async (req, res) => {
    try{
        const userId = req.params.id;
        const upadtedData = req.body;

        const response = await User.findByIdAndUpdate(userId, upadtedData, {
            new: true,
            runValidators: true
        });

        if(!response){
            res.status(404).json({"message": "User Not Found!"});
        }

        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({"error" : "Internal Server Error!"});
    }
});

route.delete('/:id', async (req, res) => {
    try{
        const userId = req.params.id;

        const response = await User.findByIdAndDelete(userId);

        if(!response){
            res.status(404).json({"message": "User Not Found!"});
        }

        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({"error" : "Internal Server Error!"});
    }
})

module.exports = route;
