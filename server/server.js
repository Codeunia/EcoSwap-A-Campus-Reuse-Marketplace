const express = require("express"); 
const mongoose = require("mongoose") ; 
const cors = require("cors"); 
const dotenv = require("dotenv") ; 

dotenv.config(); 

const app = express(); 
app.use(cors());
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(3000 , () => {
        console.log("server running at the port 3000");
    })
})
.catch((err) => {
    console.log("mongodb connection failed " + err);
})
