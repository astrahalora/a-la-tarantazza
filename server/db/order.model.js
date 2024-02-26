const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
    client: {
        name: String,
        email: String,
        address: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        quantity: Number
    }],
    totalCost: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", OrderSchema );