const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const connectDB = require("./config/db");

const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));

// Serve static files (images)
app.use('/images', express.static('upload/images'));

// Root route for testing
app.get("/", (req, res) => {
  res.send("Root");
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



// // const port = 4000;
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// // const jwt = require('jwt');
// // const multer = require('multer');
// const path = require('path');
// const cors = require('cors');
// const connectDB = require("./Databse/db.js"); 
// const port = process.env.PORT || 5000;


// app.use(express.json());
// // app.use(cors())


// // Connect to MongoDB
// connectDB();

// // // connect to mgDB
// // mongoose.connect("mongodb+srv://harshitachouhanhm:qBTtXJiM04ntBJdK@clusterhm.1xvhyc4.mongodb.net/");

// // Routes
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));

// // api creation 
// app.get("/", (req, res)=>{
//   res.send("Express App is Running")
// })




// app.listen(port, (error) => {
//     if (!error) console.log(`Server Running on port ${port}`);
//     else console.log("Error: ", error);
//   });