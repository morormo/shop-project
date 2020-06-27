import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PageNav.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-item-center'>
        <div className='col'>
          Logo
        </div>
        <div className={`col-auto ${styles.menu}`} >
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`} className={styles.active} >Home</Link>
            </li>
            <li>
              <a href='#'><FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />Cart</a>
            </li>
          </ul>
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
  Component as PageNav,
  // Container as Header,
  Component as PageNavComponent,
};
