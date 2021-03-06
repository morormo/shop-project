import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Banner.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className='container-fluid'>
      <div className='row'>
        <div className={`col ${styles.photo}`}>
          <img src="/photo/banner.jpg" alt="banner"></img>
        </div>
      </div>
    </div>
  </div>
);

Component.propTypes = {
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
  Component as Banner,
  // Container as Header,
  Component as BannerComponent,
};
