const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const userModel = require('./model/model')
const PORT = 8080;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud", {
    family: 4,
})
    .then(() => {
        console.log("mongodb connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.post("/create", (req, res) => {
    userModel.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.get("/", (req, res) => {
    userModel.find({})
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    userModel.findById({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id
    userModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.listen(PORT, () => {
    console.log(`server Running on the port ${PORT}`)
})