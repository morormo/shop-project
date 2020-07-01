import React from 'react';
import PropTypes from 'prop-types';
import styles from './Items.module.scss';

import Button from '../Button/Button';

import {Link} from 'react-router-dom';

const Items = ({id, name, prize, image}) => {
  return (
    <Link to={`/product/${id}`} className={`col-12 col-lg-4 ${styles.items}`}>
      <div className={styles.photo}>
        <img src ={image} alt="koszulka"></img>
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <span>{prize}</span>
        <div className={styles.button}>
          <Button variant='white'>ADD TO CART</Button>
        </div>
      </div>
    </Link>
  );
};

Items.propTypes ={
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  prize: PropTypes.string,
};

export default Items;
