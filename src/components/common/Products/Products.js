import React from 'react';
import PropTypes from 'prop-types';


import styles from './Products.module.scss';

import Items from '../Items/Items';


class Products extends React.Component {

  render() {
    const { posts } = this.props;

    return(
      <div className={styles.root}>
          <div className='container'>
              <div className={styles.subtitle}>
                <h2>Produkty</h2>
              </div>
              <div className='row'>
              {posts === undefined
              ?
              <div>pusto</div>
              :
              posts.map(post =>
                <div className='col-12 col-lg-4' key={post._id}>
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
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      image: PropTypes.string,
    })),
};

export default Products;
