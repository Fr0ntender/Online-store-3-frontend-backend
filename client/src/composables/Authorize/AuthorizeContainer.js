import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withProps, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'

import { triggerModal } from '../../ducks/modals'
import { authorize } from '../../ducks/authorization'

import Authorize from './Authorize'

const mapStateToProps = state => ({
  authorization: state.authorization,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  authorize,
  triggerModal
}, dispatch)

export const props = ({
  authorize,
  triggerModal,
  authorization,
}) => ({
  authorization,
  authorize: ({ username, password }) => e => {
    e.preventDefault()
    authorize({
      username: username.current.value,
      password: password.current.value,
    })
  },
  triggerModal
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withProps(props),
  withRouter,
  lifecycle({
    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.authorization.authorized) {
        this.props.history.replace("/admin/products");
      }
    }
  })
)(Authorize)