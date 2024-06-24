require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes')

app.use(express.json());
app.use('/api/auth', authRoutes);






























mongoose
    .connect("mongodb://localhost:27017/hrms")
    .then(() => {
        console.log("Connected to MongoDB successfully");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
