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
              <h5>Darmowa dostawa</h5>
              <p>od 100zł</p>
              <FontAwesomeIcon className={styles.icon} icon={faTruck} />
            </div>
          </div>
          <div className='col-xs-12 col-lg-3'>
            <div className={`col-12 ${styles.box}`}>
              <h5>24/7 Wsparcie</h5>
              <p>Klienta</p>
              <FontAwesomeIcon className={styles.icon} icon={faHeadphones} />
            </div>
          </div>
          <div className='col-xs-12 col-lg-3'>
            <div className={`col-12 ${styles.box}`}>
              <h5>Kupony</h5>
              <p>Lojalnościowe</p>
              <FontAwesomeIcon className={styles.icon} icon={faReplyAll} />
            </div>
          </div>
          <div className='col-xs-12 col-lg-3'>
            <div className={`col-12 ${styles.box}`}>
              <h5>Karta klienta</h5>
              <p>Dla pierwszych zleceń</p>
              <FontAwesomeIcon className={styles.icon} icon={faBullhorn} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
