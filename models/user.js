const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
    name: String,
    age: Number
})

const user = mongoose.model('user', UserSchema);

module.exports = user