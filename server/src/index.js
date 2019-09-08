const graphqlHTTP = require('express-graphql'),
    bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors')

const { devUrl, devPort } = require('./etc/config.json'),
    schema = require('./graphql/Product'),
    db = require('./utils')

// Initialization of express application
const app = express()
const host = process.env.NODE_ENV === 'development' ? devUrl
: `http://${db.host}`
// Allow requests from any origin
app.use(cors({ origin: '*' }))
// Using bodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Set up connection of database
db.setUpConnection()

// Using graphql middleware
app.post('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))
app.get('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(devPort, () => {
    console.log(`Server running on ${host}:${devPort}`)
    console.log(`GraphQL running on ${host}:${devPort}/graphql`)
})