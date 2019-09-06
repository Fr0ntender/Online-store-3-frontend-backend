import { gql } from 'apollo-boost'

export const productsQuery = gql`
    query productsQuery($name: String) {
        products(name: $name) {
            id
            num
            isbn
            name
            vote
            year
            price
            rating
            imgUrl
            imgName
            lastName
            firstName
        }
    }
`