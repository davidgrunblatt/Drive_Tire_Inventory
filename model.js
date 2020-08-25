const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    tireID: Number,
    width: Number,
    Aspect: Number,
    Rim: Number,
    Brand: String,
    Model: String,
    Speed: String,
    Tread: String,
    stockQty: Number,
    cost: Number,
    wholesale: Number,
    publicNotes: String,
    location: String,
    privateNotes: String,
    publicNotes: String,
    img: String,
});

const Tire = mongoose.model('Tire', schema);

module.exports = Tire;