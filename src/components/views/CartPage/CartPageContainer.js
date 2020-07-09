import { connect } from 'react-redux';
import { getShoppingCart, createActionRemoveFromCart } from '../../../redux/cartRedux';
import CartPage from './CartPage';

const mapStateToProps = (state, props) => ({
  cart: getShoppingCart(state, props.id),
}

);

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(createActionRemoveFromCart(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
