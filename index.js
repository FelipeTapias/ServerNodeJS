//Importamos express
const express = require('express');
const conectarDB = require('./config/db');
const user = require('./models/user');
require('dotenv').config();

//Creamos el servidor
const app = express();

//Conectamos a la BD
conectarDB();

app.use(express.json());

app.get('/users', (req, res, next) => {
    let query = {};
    if (req.query.name) {
        query.name = req.query.name;
    }
    user.find(query).then(data => {
            res.send(data)
        })
        .catch(err => {
            next(err)
        })
});

app.post('/users', (req, res, next) => {
    const userCreate = new user(req.body)

    userCreate.save()
        .then(_ => {
            res.send({
                message: 'created'
            })
        })
        .catch(err => {
            next(err)
        })
});

app.put('/users', (req, res, next) => {
    user.findOne({ name: req.body.name })
        .then(doc => {
            user.updateOne({ _id: doc._id }, req.body)
            res.send({
                message: 'updated'
            })
        })
        .catch(err => {
            next(err)
        })
});


app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});