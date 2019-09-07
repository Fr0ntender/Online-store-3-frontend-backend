import { compose, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import { productsQuery } from '../../graphql/query'
import { triggerModal } from '../../ducks/modals'
import Home from './Home';

const mapStateToProps = state => ({
    authorized: state.authorization.authorized,
    modals: state.modals.find(({ name }) => name === 'adminIsOpen').state,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    triggerModal
}, dispatch)

export const props = ({
    modals,
    authorized,
    triggerModal,
}) => ({
    modals,
    authorized,
    showModal: () => {
        triggerModal({
            name: 'adminIsOpen',
            state: true
        })
    }
})

const searchProduct = graphql(productsQuery, {
    options: ({ name = '', sortName = '', state = false }) => ({
        variables: { name, sortName, state }
    })
})

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withProps(props),
    withRouter,
    searchProduct
)(Home)