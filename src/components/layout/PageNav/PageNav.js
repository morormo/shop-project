import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import styles from './PageNav.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-item-center'>
        <div className='col'>
        </div>
        <div className={`col-auto ${styles.menu}`} >
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`} className={styles.active} >Home</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/cart`}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />Cart
              </Link>
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

export {
  Component as PageNav,
  // Container as Header,
  Component as PageNavComponent,
};
