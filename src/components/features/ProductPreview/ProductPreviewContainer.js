import { connect } from 'react-redux';
import { getProduct } from '../../../redux/postsRedux';
import ProductPreview from './ProductPreview';

const mapStateToProps = (state, props) => ({
  post: getProduct(state, props.id),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPreview);
