import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartPage.module.scss';
import { Link } from 'react-router-dom';
import AddToCart from '../../features/AddToCart/AddToCartContainer';

class CartPage extends React.Component {

  removeFromCart = (id) => {
    this.props.removeFromCart(id);
  }

  render() {
    const { cartItems } = this.props.cart;
    return (
      <div className='container'>
        <h1>TWÓJ KOSZYK</h1>
        <span>ŁĄCZNIE ({cartItems.length} produkt)</span>
        <div className='row'>
          <div className={`col-lg-6`}>
            {cartItems.length === 0 ?
              <div>
                Cart is empty
              </div>
              :
              cartItems.map(item =>
                <div key={item.id} className={`row ${styles.item}`}>
                  <div className={`col-3 ${styles.image}`}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='col-9'>
                    <div className='row align-item-center'>
                      <div className='col-6'>
                        <h3>{item.name}</h3>
                      </div>
                      <div className={`col-5 ${styles.prize}`}>
                        {item.prize}PLN
                      </div>
                      <div className='col-1'>
                        <button type="button" className="button" onClick={this.removeFromCart.bind(this, item.id)} >
                          X
                        </button>
                      </div>
                    </div>
                    <div>
                      Ilość: <AddToCart product={cartItems} btn='hidden' counter='' value={item.qty} />
                    </div>
                    <div>
                    Suma: ({item.prize * item.qty}PLN)
                    </div>
                  </div>
                </div>
              )
            }
          </div>
          {cartItems.length === 0 ?
            <div>

            </div>
            :
            <div className='col-lg-6'>
              <div className={styles.continue}>
                <Link to={'/'}>
                  Kontynuj zakupy!
                </Link>
              </div>
              <div className={styles.or}>
              Lub
              </div>
              <div className={styles.end}>
                <Link to={'/delivery'}>
                  Przejdź do zamówienia
                </Link>
              </div>
              <div className={styles.summary}>
                <h5>PODSUMOWANIE ZAMÓWIENIA</h5>
                {cartItems.map(item =>
                  <div key={item.id} className={`row ${styles.summaryitem}`}>
                    <div className='col-9'>
                      CENA
                    </div>
                    <div className='col-3'>
                      {item.prize}
                    </div>
                  </div>
                )}
                <div className={`row ${styles.summaryitem}`}>
                  <div className='col-9'>
                    ILOŚĆ
                  </div>
                  <div className='col-3'>
                    {cartItems.length}
                  </div>
                </div>
                <div className={`row ${styles.summaryitem}`}>
                  <div className='col-9'>
                    DOSTAWA
                  </div>
                  <div className='col-3'>
                    Za darmo
                  </div>
                </div>
                <div className={`row ${styles.summaryitem}`}>
                  <div className='col-9'>
                    RAZEM
                  </div>
                  <div className='col-3'>
                    razem
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

      </div>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.object,
  removeFromCart: PropTypes.func,
};

export default CartPage;
