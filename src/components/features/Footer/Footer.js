import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6 col-lg-3'>
          <span className={styles.subtitle}>
            Informacje
          </span>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#about'>O nas</a>
              </li>
              <li>
                <a href='#policy'>Polityka</a>
              </li>
              <li>
                <a href='#conditions'>Warunki</a>
              </li>
              <li>
                <a href='#shop'>Online Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-6 col-lg-3'>
          <span className={styles.subtitle}>
            Konto
          </span>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#login'>Zaloguj</a>
              </li>
              <li>
                <a href='cart'>Mój koszyk</a>
              </li>
              <li>
                <a href='#wishlist'>Lista życzeń</a>
              </li>
              <li>
                <a href='#checkout'>Checkout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-6 col-lg-3'>
          <span className={styles.subtitle}>
            Informacje
          </span>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#specials'>Promocje</a>
              </li>
              <li>
                <a href='#newproducts'>Nowe Produkty</a>
              </li>
              <li>
                <a href='#best'>Na Topie</a>
              </li>
              <li>
                <a href='#stories'>Wyprzedaż</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-6 col-lg-3'>
          <span className={styles.subtitle}>
            Zamówienie
          </span>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#payment'>Opcje płatności</a>
              </li>
              <li>
                <a href='#delivery'>Dostawa</a>
              </li>
              <li>
                <a href='#returns'>Zwrot</a>
              </li>
              <li>
                <a href='#shipping'>Wysyłka</a>
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
