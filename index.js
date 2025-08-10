const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// route call
const productRoute = require("./routes/product.route.js");

// database connection
const connect = async () => {
    const uri = process.env.DATABASE;
    try {
        await mongoose.set('bufferCommands', false);
        await mongoose.set('strictQuery', true);
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
        console.log("Database connected.");
    } catch (error) {
        console.log(`${error} did not connect.`)
    }
}

// middleware
app.use(cors());
app.use(express.json());

app.use("/products", productRoute);

app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    })
});

app.get('/', (req, res) => {
    res.send('Document founded!');
});

app.listen(port, () => {
    connect();
    console.log('Server is running on port:', port);
});