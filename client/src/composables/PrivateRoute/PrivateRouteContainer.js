
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = state => ({
  authorization: state.authorization
});

export default connect(
  mapStateToProps,
)(PrivateRoute);