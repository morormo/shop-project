import React from 'react';
import PropTypes from 'prop-types';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Products.module.scss';

import Items from '../Items/Items';

// import { faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';

class Products extends React.Component {

  render() {
    const { posts } = this.props;

    return(
      <div className={styles.root}>
          <div className='container'>
              <div className={styles.subtitle}>
                <h2>Our Products</h2>
              </div>
              <div className='row'>
              {posts === undefined
              ?
              <div>pusto</div>
              :
              posts.map(post =>
                <div className='col-4' key={post._id}>
                  <Items post={post} />
                </div>
              )}
            </div>
          </div>
        </div>
    );
  }
}


Products.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })),
};

export default Products;
