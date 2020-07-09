import React from 'react';
import PropTypes from 'prop-types';
import styles from './Items.module.scss';

// import AddToCart from '../../features/AddToCart/AddToCartContainer';

import {Link} from 'react-router-dom';

class Items extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <div className={styles.items}>
        <Link to={`/product/${post._id}`}>
          <div className={styles.photo}>
            <img src ={post.image} alt="koszulka"></img>
          </div>
          <div className={styles.content}>
            <h3>{post.name}</h3>
            <span>{post.prize}PLN</span>
            <div className={styles.button}>
            <div>
                {/* <AddToCart post={post} counter='hidden' btn='' /> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}


Items.propTypes ={
  post: PropTypes.object,
};

export default Items;
