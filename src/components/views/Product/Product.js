import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import AD from '../../common/AD/AD.js';
import styles from './Product.module.scss';

const Component = ({posts, match}) => {
  const post = posts.data[match.params.id];

  return (
    <div className={styles.root}>
      <AD
        key={post.id}
        name={post.name}
        prize={post.prize}
        image={post.image}
        id={post.id}
      />
    </div>
  );
};


Component.propTypes = {
  posts: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = state => ({
  posts: state.posts,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ProductContainer = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Component as Product,
  Component as ProductComponent,
};
