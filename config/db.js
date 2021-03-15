const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async() => {
    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Base de datos conectada');

    } catch (err) {
        console.log(err);
        process.exit(1); //Detenemos la app
    }
}

module.exports = conectarDB