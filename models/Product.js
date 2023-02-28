const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    ProdName: String,
    ProdCategory: String,
    ProdPrice: Number,
    ProdImage: String
})

module.exports = mongoose.model("Product", ProductSchema)