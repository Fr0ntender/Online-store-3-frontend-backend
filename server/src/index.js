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

// Set up connection of database
db.setUpConnection()

// Using graphql middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

// Using bodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// RESTful api handlers
app.post('/api/product/sort', (req, res) => {
    db.sortProduct(req.body.state, req.body.name)
        .then(data => res.send(data))
        .catch(err => res.send(`Error ${err}`))
})

app.delete('/api/product/:id', (req, res) => {
    db.deleteProduct(req.params.id).then(data => res.send(data))
})

app.listen(devPort, function () {
    console.log(`Server running on ${devUrl}:${devPort}`)
    console.log(`GraphQL running on ${devUrl}:${devPort}/graphql`)
})