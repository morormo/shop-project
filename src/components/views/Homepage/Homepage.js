import React from 'react';
import PropTypes from 'prop-types';

// import Items from '../../common/Items/Items';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
import FeatureBox from '../../features/FeatureBox/FeatureBox';
import { Banner } from '../../features/Banner/Banner';
import Products from '../../common/Products/ProductsContainer';

const Component = ({className, children}) => (
  <div className={(className, styles.root)}>
    <Banner />
    <FeatureBox />
    <Products />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
