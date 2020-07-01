import { connect } from 'react-redux';
import { getProduct } from '../../../redux/postsRedux';
import ProductPreview from './ProductPreview';

const mapStateToProps = (state, props) => ({
  product: getProduct(state, props.id),
});


export default connect(mapStateToProps)(ProductPreview);
