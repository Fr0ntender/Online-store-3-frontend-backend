const mongoose = require('mongoose')

const { db } = require('../etc/config.json')

exports.setUpConnection = () => {
    mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`)
    mongoose.set('useCreateIndex', true)
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useFindAndModify', false)
    mongoose.connection.on(`error`, err => console.log(`Connection error: ${err}`))
    mongoose.connection.once(`open`, () => console.log(`DB connected`))
}