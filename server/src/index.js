const graphqlHTTP = require('express-graphql'),
    bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors')

const { devUrl, devPort } = require('./etc/config.json'),
    schema = require('./graphql/Product'),
    db = require('./utils')

// Initialization of express application
const app = express()

// Allow requests from any origin
app.use(cors({ origin: '*' }))
// Using bodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Set up connection of database
db.setUpConnection()

// Using graphql middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(devPort, function () {
    console.log(`Server running on ${devUrl}:${devPort}`)
    console.log(`GraphQL running on ${devUrl}:${devPort}/graphql`)
})