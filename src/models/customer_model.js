let mongoose = require('mongoose');
let {config} = require('dotenv');

config()
const uri = process.env.URI

mongoose.connect(uri);

let customerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', customerSchema);