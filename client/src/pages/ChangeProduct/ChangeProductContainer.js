import { compose, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logout } from '../../ducks/authorization'
import ChangeProduct from './ChangeProduct'

const mapStateToProps = state => ({
    authorized: state.authorization.authorized,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
}, dispatch)

const props = ({
    match,
    logout,
    authorized,
}) => ({
    match,
    authorized,
    logout: () => {
        logout()
    }
})

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withProps(props),
    withRouter
)(ChangeProduct)