const graphql = require('graphql')
const Product = require('../models/Product')

const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLID
} = graphql

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        num: { type: new GraphQLNonNull(GraphQLInt) },
        isbn: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        vote: { type: new GraphQLNonNull(GraphQLInt) },
        year: { type: new GraphQLNonNull(GraphQLInt) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        rating: { type: new GraphQLNonNull(GraphQLInt) },
        imgUrl: { type: new GraphQLNonNull(GraphQLString) },
        imgName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: new GraphQLNonNull(GraphQLString) }
    })
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProduct: {
            type: ProductType,
            args: {
                id: { type: GraphQLID },
                num: { type: new GraphQLNonNull(GraphQLInt) },
                isbn: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                vote: { type: new GraphQLNonNull(GraphQLInt) },
                year: { type: new GraphQLNonNull(GraphQLInt) },
                price: { type: new GraphQLNonNull(GraphQLInt) },
                rating: { type: new GraphQLNonNull(GraphQLInt) },
                imgUrl: { type: new GraphQLNonNull(GraphQLString) },
                imgName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                firstName: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const product = new Product({
                    num: args.num,
                    isbn: args.isbn,
                    name: args.name,
                    vote: args.vote,
                    year: args.year,
                    price: args.price,
                    rating: args.rating,
                    imgUrl: args.imgUrl,
                    imgName: args.imgName,
                    lastName: args.lastName,
                    firstName: args.firstName,
                })
                return product.save()
            }
        },
        delProduct: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Product.findOneAndRemove({
                    _id: id
                },
                err => {if (err) console.error(err)}
                )
            }
        },
        upProduct: {
            type: ProductType,
            args: {
                id: { type: GraphQLID },
                num: { type: new GraphQLNonNull(GraphQLInt) },
                isbn: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                vote: { type: new GraphQLNonNull(GraphQLInt) },
                year: { type: new GraphQLNonNull(GraphQLInt) },
                price: { type: new GraphQLNonNull(GraphQLInt) },
                rating: { type: new GraphQLNonNull(GraphQLInt) },
                imgUrl: { type: new GraphQLNonNull(GraphQLString) },
                imgName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                firstName: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Product.updateOne(
                    {
                        _id: args.id
                    }, {
                        $set: {
                            num: args.num,
                            isbn: args.isbn,
                            name: args.name,
                            vote: args.vote,
                            year: args.year,
                            price: args.price,
                            rating: args.rating,
                            imgUrl: args.imgUrl,
                            imgName: args.imgName,
                            lastName: args.lastName,
                            firstName: args.firstName,
                        }
                    }, 
                    err => {if (err) console.error(err)}
                )
            }
        },
        sortProduct: {
            type: ProductType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                vote: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                return Product.updateOne(
                    {
                        _id: args.id
                    }, {
                        $set: {
                            num: args.num,
                            isbn: args.isbn,
                            name: args.name,
                            vote: args.vote,
                            year: args.year,
                            price: args.price,
                            rating: args.rating,
                            imgUrl: args.imgUrl,
                            imgName: args.imgName,
                            lastName: args.lastName,
                            firstName: args.firstName,
                        }
                    }, 
                    err => {if (err) console.error(err)}
                )
            }
        }
    }
})

const Query = new GraphQLObjectType({
    name: `Query`,
    fields: {
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Product.findById(id)
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            args: { 
                name: { type: GraphQLString },
                sortName: { type: GraphQLString },
                state: { type: GraphQLBoolean }
            },
            resolve(parent, { name, sortName, state }) {
                if(name !== '') {
                    return Product.find({ name: { $regex: name, $options: "i" }})
                } else if (sortName === 'Name') {
                    if (!state) {
                        return Product.find().sort({ name: 1 })
                    } else {
                        return Product.find().sort({ name: -1 })
                    }
                } else if (sortName === 'Year') {
                    if (!state) {
                        return Product.find().sort({ year: 1 })
                    } else {
                        return Product.find().sort({ year: -1 })
                    }
                } else {
                    return Product.find()
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})