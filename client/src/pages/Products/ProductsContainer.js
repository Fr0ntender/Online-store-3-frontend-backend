import { compose, withProps, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import { delProductMutation } from '../../graphql/mutation'
import { productsQuery } from '../../graphql/query'
import { logout } from '../../ducks/authorization'
import Products from './Products'

const mapStateToProps = state => ({
    authorized: state.authorization.authorized,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
}, dispatch)

const props = ({
    logout,
    history,
    authorized,
}) => ({
    history,
    authorized,
    logout: () => {
        logout()
    },
    searchActive: name => {
        let sortName = ''
        let nameToggl = ''
        let stateName = ''
        const { location } = history

        if (name === 'Name') {
            if (location.search && location.state) {
                sortName = location.search.replace('?sortName=', '')
                nameToggl = sortName === 'ascending' ? 'descending' : 'ascending'
                stateName = sortName === 'ascending' ? false : true
            } else if (location.search) {
                sortName = location.search.replace('?sortName=', '')
                nameToggl = sortName === 'ascending' ? 'ascending' : 'descending'
                stateName = nameToggl === 'ascending' ? true : false
            } else {
                nameToggl = 'ascending'
                stateName = true
            }
        } else {
            if (location.search && location.state) {
                sortName = location.search.replace('?sortYear=', '')
                nameToggl = sortName === 'ascending' ? 'descending' : 'ascending'
                stateName = sortName === 'ascending' ? false : true
            } else if (location.search) {
                sortName = location.search.replace('?sortYear=', '')
                nameToggl = sortName === 'ascending' ? 'ascending' : 'descending'
                stateName = nameToggl === 'ascending' ? true : false
            } else {
                nameToggl = 'ascending'
                stateName = true
            }
        }
        history.push({
            pathname: '/admin/products/',
            search: `?sort${name}=${nameToggl}`,
            type: name,
            state: {
                sort: stateName
            }
        })
        console.log(stateName, name)
    }
})

const delProduct = graphql(delProductMutation, {
    props: ({ mutate }) => ({
        delProduct: id => mutate({
            variables: { id },
            refetchQueries: [{ 
                query: productsQuery,
                variables: { name: '' }
            }],
        })
    })
})

const getProduct = graphql(productsQuery, {
    options: ({ name = '' }) => ({
        variables: { name }
    })
})

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withProps(props),
    withRouter,
    lifecycle({
        UNSAFE_componentWillMount() {
            const { location } = this.props.history
            if (location.search) {
                const sortName = location.search.replace('?sort', '').replace('=descending', '').replace('=ascending', '')
                if (sortName === 'Name') {
                    this.props.searchActive('Name')
                } else {
                    this.props.searchActive('Year')
                }
            }
        }
    }),
    delProduct,
    getProduct,
)(Products)