const mongoose = require('mongoose');

const mongodb_url = process.env.DB_URL;

mongoose.connect(mongodb_url);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Database Connected");
});

db.on('error', (err) => {
    console.log("error : ", err);
});

db.on('disconnected', () => {
    console.log("Database Disconnected");
});

module.exports = db;