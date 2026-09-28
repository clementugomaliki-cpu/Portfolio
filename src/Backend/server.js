const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 6000
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.NO_SRV)
.then(() => console.log("App connected to DB"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(cors({origin: [
    "https://portfolio-na6b.onrender.com",
    "http://localhost:5174"
]}));

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
},
{timestamps: true}
)

const Model = mongoose.model("Message", schema);

app.get("/", (req, res) => {
    res.send("Hello from the backend");
})

app.post("/", async (req, res) => {
    try {
    const {name, email, message} = req.body;
    await Model.create({name, email, message});
    res.status(201).json({message: "Thank you for sending your message. You will get a response soon!"});
    } catch (err) {
        res.status(500).json ({message: "Something went wrong."})
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})