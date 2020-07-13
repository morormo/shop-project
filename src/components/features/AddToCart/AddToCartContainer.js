import { connect } from 'react-redux';
import { addCartToStorage } from '../../../redux/cartRedux';
import AddToCart from './AddToCart';

const mapStateToProps = (state, props) => ({
}

);

const mapDispatchToProps = dispatch => ({
  addToCart: (post, qty) => dispatch(addCartToStorage(post, qty)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
