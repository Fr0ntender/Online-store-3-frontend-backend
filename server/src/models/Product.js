const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    num: { type: Number },
    isbn: { type: String },
    name: { type: String },
    vote: { type: Number },
    year: { type: Number },
    price: { type: Number },
    rating: { type: Number },
    imgUrl: { type: String },
    imgName: { type: String },
    lastName: { type: String },
    firstName: { type: String }
})

module.exports = mongoose.model('Product', ProductSchema)