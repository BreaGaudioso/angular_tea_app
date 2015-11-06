var mongoose = require("mongoose");

var teaSchema = new mongoose.Schema({
    "_id": String,
    "name": String,
    "ingredients": String,
    "caffeineScale": Number,
    "price": Number,
    "qty": Number,
    "inStock": Boolean,
    "rating": Number,
    "imageUrl": String,
    "__v": Number,
    "categories": Array

});

var Tea = mongoose.model("Tea", teaSchema);

module.exports = Tea;