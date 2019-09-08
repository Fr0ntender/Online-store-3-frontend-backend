const mongoose = require('mongoose')

const { database, devHost } = require('../etc/config.json')

const host = process.env.NODE_ENV === 'development' ? devHost
: database.host

exports.setUpConnection = () => {
    mongoose.connect(`mongodb://${host}:${database.port}/${database.name}`)
    mongoose.set('useCreateIndex', true)
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useFindAndModify', false)
    mongoose.connection.on(`error`, err => console.log(`Connection error: ${err}`))
    mongoose.connection.once(`open`, () => console.log(`DB connected`))
}