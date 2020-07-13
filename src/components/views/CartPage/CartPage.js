import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartPage.module.scss';
import { Link } from 'react-router-dom';
import AddToCart from '../../features/AddToCart/AddToCartContainer';
import { Banner } from '../../features/Banner/Banner';

class CartPage extends React.Component {

  removeFromCart = (id) => {
    this.props.removeFromCart(id);
  }

  render() {
    // const cartItems = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    const cartItems = this.props.cart.cartItems;
    return (
      <div>
      <Banner />
      <div className='container'>
        <h1>TWÓJ KOSZYK</h1>
        <div className='row'>
          <div className={`col-lg-6`}>
            {cartItems.length === 0 ?
              <div className={styles.empty}>
                Koszyk jest pusty
              </div>
              :
              cartItems.map(item =>

                <div key={item._id} className={`row ${styles.item}`}>
                  <div className={`col-3 ${styles.image}`}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='col-9'>
                    <div className='row align-item-center'>
                      <div className='col-6'>
                        <h3>{item.name}</h3>
                      </div>
                      <div className='col-1 offset-4 offset-md-5'>
                        <button type="button" className="button" onClick={this.removeFromCart.bind(this, item.id)} >
                          X
                        </button>
                      </div>
                      <div className={`col-12 ${styles.price}`}>
                        {item.price}PLN
                      </div>

                    </div>
                    <div>
                      <div className='row'>
                        <div className='col-12 col-lg-4'>
                        Ilość: <AddToCart post={item} btn='hidden' counter='' value={item.qty} />
                        </div>
                        <div className='col-12 col-lg-8'>
                          <form>
                            <input type="text" className="form-description" id="description" placeholder="Dodaj uwagi" name='description' />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div>
                    Suma: ({item.price * item.qty}PLN)
                    </div>
                  </div>
                </div>
              )
            }
          </div>
          {cartItems.length !== 0 &&
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
                    {cartItems.reduce((previousPrice, currentPrice) => previousPrice + currentPrice.price * currentPrice.qty, 0).toFixed(2)} PLN
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

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
