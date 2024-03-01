require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./db/product.model");
const Favorite= require("./db/favorite.model");
const Order = require("./db/order.model");

const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
        "Access-Control-Allow-Methods",
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const serverErrorHandler = (res, err) => {
    console.error(err);
    return res.status(500).json({ message: err.message });
};

app.route("/products")
    .get(async (req, res) => {
        try {
            const products = await Product.find();
            return res.json(products);
        } catch (err) {
            serverErrorHandler(res, err);
        }
    });

app.route("/favorites")
    .get(async (req, res) => {
        try {
            const favorites = await Favorite.find();
            return res.json(favorites);
        } catch (err) {
            serverErrorHandler(res, err);
        }
    })
    .post(async (req, res) => {
        const newFavorite = new Favorite(req.body);
        try {
            const favorite = await newFavorite.save();
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    })

app.route("/favorites/:id")
    .delete(async (req, res) => {
        const favoriteId = req.params.id;

        try {
            const favorite = await Favorite.findOneAndDelete({_id: favoriteId});

            if(!favorite) {
                return res.status(404).json({message: "Favorite not found"});
            }
            return res.status(200).json({massage: "Favorite deleted"});
        } catch (err) {
            serverErrorHandler(res, err);
        }
    })

app.route("/orders")
    .get(async (req, res) => {
        try {
            const orders = await Order.find();
            return res.json(orders);
        } catch (err) {
            serverErrorHandler(res, err);
        }
    })
    .post(async (req, res) => {
        const newOrder = new Order(req.body);
        try {
            const order = await newOrder.save();
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    })

const main = async () => {
    await mongoose.connect(MONGO_URL);

    app.listen(PORT, () => {
        console.log("App is listening on 8080");
        console.log("http://localhost:8080/products");
    });
};

main().catch((err) => {
    console.error(err);
    process.exit(1);
});