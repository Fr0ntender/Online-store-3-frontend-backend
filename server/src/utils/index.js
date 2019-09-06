const mongoose = require('mongoose')

const Product = require('../models/Product')
const { db } = require('../etc/config.json')

exports.setUpConnection = () => {
    mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`)
    mongoose.set('useCreateIndex', true)
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useFindAndModify', false)
    mongoose.connection.on(`error`, err => console.log(`Connection error: ${err}`))
    mongoose.connection.once(`open`, () => console.log(`DB connected`))
}

exports.sortProduct = (state, name) => {
    if (name === 'Name') {
        if (!state) {
            return Product.find({}).sort({ productName: -1 })
        } else {
            return Product.find({}).sort({ productName: 1 })
        }
    } else {
        if (!state) {
            return Product.find({}).sort({ productYear: -1 })
        } else {
            return Product.find({}).sort({ productYear: 1 })
        }
    }
}

exports.deleteProduct = id => {
    return Product.findById(id).remove()
}