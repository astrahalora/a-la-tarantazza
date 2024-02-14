const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    type: String,
    imageUrl: String,
    ingredients: [String],
    alergens: [String],
    price: Number,
    amount: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", ProductSchema);