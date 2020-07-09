import { connect } from 'react-redux';
import Products from './Products';
import { getProducts } from '../../../redux/postsRedux.js';

const mapStateToProps = state => ({
  posts: getProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   changeCompare: index => dispatch(changeCompare(index)),
//   addFav: number => dispatch(addFavorite(number)),
// });

export default connect(mapStateToProps)(Products);
