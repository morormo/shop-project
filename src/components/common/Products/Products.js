import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Products.module.scss';

import Items from '../Items/Items';

const Component = ({posts}) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.subtitle}>
        <h2>Our Products</h2>
      </div>
      <div className='row'>
        {posts.data.map(post => (
          <Items
            key={post.id}
            name={post.name}
            prize={post.prize}
            image={post.image}
            id={post.id}
          />
        ))}
      </div>
    </div>
  </div>
);

Component.propTypes = {
  posts: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};
