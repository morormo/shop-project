import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6 col-lg-3'>
          <span className={styles.subtitle}>
            Information
          </span>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#'>About us</a>
              </li>
              <li>
                <a href='#'>Policy</a>
              </li>
              <li>
                <a href='#'>Conditions</a>
              </li>
              <li>
                <a href='#'>Online Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-6 col-lg-3'>
          <span className={styles.subtitle}>
            Account
          </span>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#'>Login</a>
              </li>
              <li>
                <a href='#'>My Cart</a>
              </li>
              <li>
                <a href='#'>Wishlist</a>
              </li>
              <li>
                <a href='#'>Checkout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-6 col-lg-3'>
          <span className={styles.subtitle}>
            Information
          </span>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#'>Specials</a>
              </li>
              <li>
                <a href='#'>New Product</a>
              </li>
              <li>
                <a href='#'>Best Sellers</a>
              </li>
              <li>
                <a href='#'>Out Stores</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-6 col-lg-3'>
          <span className={styles.subtitle}>
            Orders
          </span>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#'>Payment options</a>
              </li>
              <li>
                <a href='#'>Shipping and delivery</a>
              </li>
              <li>
                <a href='#'>Returns</a>
              </li>
              <li>
                <a href='#'>Shipping</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row align item-center'>
        <div className={`col ${styles.copycontainer}`}>
          <span className={styles.copyright}>©Copyright 2020 Shop | Daniel Stokłosa</span>
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
  Component as Footer,
  // Container as Header,
  Component as FooterComponent,
};
