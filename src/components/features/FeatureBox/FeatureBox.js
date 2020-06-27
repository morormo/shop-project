import React from 'react';
import styles from './FeatureBox.module.scss';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureBox = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-lg-3'>
            <div className={`col-12 ${styles.box}`}>
              <h5>Free Shiping</h5>
              <p>Orders over 100$</p>
              <FontAwesomeIcon className={styles.icon} icon={faTruck} />
            </div>
          </div>
          <div className='col-xs-12 col-lg-3'>
            <div className={`col-12 ${styles.box}`}>
              <h5>24/7 Customer</h5>
              <p>Support</p>
              <FontAwesomeIcon className={styles.icon} icon={faHeadphones} />
            </div>
          </div>
          <div className='col-xs-12 col-lg-3'>
            <div className={`col-12 ${styles.box}`}>
              <h5>Money back</h5>
              <p>Gurante</p>
              <FontAwesomeIcon className={styles.icon} icon={faReplyAll} />
            </div>
          </div>
          <div className='col-xs-12 col-lg-3'>
            <div className={`col-12 ${styles.box}`}>
              <h5>Member Discount</h5>
              <p>First Order</p>
              <FontAwesomeIcon className={styles.icon} icon={faBullhorn} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
