import { connect } from 'react-redux';
import { loadProductsRequest } from './redux/postsRedux';
import App from './App';

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(null, mapDispatchToProps)(App);
