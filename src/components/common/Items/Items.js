import React from 'react';
import styles from './Items.module.scss';

import Button from '../Button/Button';



const Items = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.subtitle}>
          <h2>Our Products</h2>
        </div>
        <div className='row'>
          <div className={`col-12 col-lg-4 ${styles.items}`}>
            <div className={styles.photo}>
              <img src ="/photo/koszulka.jpg" alt="koszulka"></img>
            </div>
            <div className={styles.content}>
              <h3>White T-shirt</h3>
              <span>from 9,99 USD</span>
              <div className={styles.button}>
                <Button variant='white'>ADD TO CART</Button>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 ${styles.items}`}>
            <div className={styles.photo}>
              <img src ="/photo/koszulka.jpg" alt="koszulka"></img>
            </div>
            <div className={styles.content}>
              <h3>White T-shirt</h3>
              <span>from 9,99 USD</span>
              <div className={styles.button}>
                <Button variant='white'>ADD TO CART</Button>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 ${styles.items}`}>
            <div className={styles.photo}>
              <img src ="/photo/koszulka.jpg" alt="koszulka"></img>
            </div>
            <div className={styles.content}>
              <h3>White T-shirt</h3>
              <span>from 9,99 USD</span>
              <div className={styles.button}>
                <Button variant='white'>ADD TO CART</Button>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 ${styles.items}`}>
            <div className={styles.photo}>
              <img src ="/photo/koszulka.jpg" alt="koszulka"></img>
            </div>
            <div className={styles.content}>
              <h3>White T-shirt</h3>
              <span>from 9,99 USD</span>
              <div className={styles.button}>
                <Button variant='white'>ADD TO CART</Button>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 ${styles.items}`}>
            <div className={styles.photo}>
              <img src ="/photo/koszulka.jpg" alt="koszulka"></img>
            </div>
            <div className={styles.content}>
              <h3>White T-shirt</h3>
              <span>from 9,99 USD</span>
              <div className={styles.button}>
                <Button variant='white'>ADD TO CART</Button>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 ${styles.items}`}>
            <div className={styles.photo}>
              <img src ="/photo/koszulka.jpg" alt="koszulka"></img>
            </div>
            <div className={styles.content}>
              <h3>White T-shirt</h3>
              <span>from 9,99 USD</span>
              <div className={styles.button}>
                <Button variant='white'>ADD TO CART</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
