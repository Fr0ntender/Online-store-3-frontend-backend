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
    searchActive: (sortName, data) => {
        let name = '',
            sortedName = '',
            nameToggl = '',
            state = ''
        const { location } = history

        if (sortName === 'Name') {
            if (location.search && location.state) {
                sortedName = location.search.replace('?sortName=', '')
                nameToggl = sortedName === 'ascending' ? 'descending' : 'ascending'
                state = sortedName === 'ascending' ? false : true
            } else if (location.search) {
                sortedName = location.search.replace('?sortName=', '')
                nameToggl = sortedName === 'ascending' ? 'ascending' : 'descending'
                state = nameToggl === 'ascending' ? true : false
            } else {
                nameToggl = 'ascending'
                state = true
            }
        } else {
            if (location.search && location.state) {
                sortedName = location.search.replace('?sortYear=', '')
                nameToggl = sortedName === 'ascending' ? 'descending' : 'ascending'
                state = sortedName === 'ascending' ? false : true
            } else if (location.search) {
                sortedName = location.search.replace('?sortYear=', '')
                nameToggl = sortedName === 'ascending' ? 'ascending' : 'descending'
                state = nameToggl === 'ascending' ? true : false
            } else {
                nameToggl = 'ascending'
                state = true
            }
        }
        history.push({
            pathname: '/admin/products/',
            search: `?sort${sortName}=${nameToggl}`,
            type: sortName,
            state: {
                sort: state
            }
        })
        data.fetchMore({
            variables: { name, sortName, state },
            updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult
        })
    }
})

const delProduct = graphql(delProductMutation, {
    props: ({ mutate }) => ({
        delProduct: id => mutate({
            variables: { id },
            refetchQueries: [{
                query: productsQuery,
                variables: { name: '', sortName: '', state: false }
            }],
        })
    })
})

const getProducts = graphql(productsQuery, {
    options: ({ name = '', sortName = '', state = false }) => ({
        variables: { name, sortName, state },
    })
})

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withProps(props),
    withRouter,
    delProduct,
    getProducts,
    lifecycle({
        UNSAFE_componentWillMount() {
            const { location } = this.props.history
            const { data } = this.props
            if (data && location.search) {
                const sortName = location.search.replace('?sort', '').replace('=descending', '').replace('=ascending', '')
                if (sortName === 'Name') {
                    this.props.searchActive('Name', data)
                } else {
                    this.props.searchActive('Year', data)
                }
            }
        }
    })
)(Products)