import { gql } from 'apollo-boost'

export const productsQuery = gql`
    query productsQuery($name: String, $sortName: String, $state: Boolean) {
        products(name: $name, sortName: $sortName, state: $state) {
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