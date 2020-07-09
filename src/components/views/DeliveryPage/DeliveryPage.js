import React from 'react';
import styles from './DeliveryPage.module.scss';
import PropTypes from 'prop-types';

class DeliveryPage extends React.Component {

  render() {
    const { firstName, lastName, address, city, zip, info } = this.props;
    return (
      <div className={styles.root}>
        <div className={`container ${styles.container}`}>
          <div className='row'>
            <div className='col-8'>
              <div className='row'>
                <div className='col-12'>
                  <h4>ADRES DOSTAWY</h4>
                  <form className={`col-12 ${styles.adres}`}>
                    <div className={styles.information}>
                      Wpisz adres dostawy, aby dokończyć zamówienie
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="firstName" placeholder="Imię" name='firstName' value={firstName} />
                        <label>Wpisz swoje imię.</label>
                      </div>
                      <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="lastName" placeholder="Nazwisko" name='lastName' value={lastName} />
                        <label>Wpisz swoje nazwisko.</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="inputAddress" placeholder="Ulica" name='address' value={address} />
                      <label>Wpisz adres dostawy</label>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="inputInfo" placeholder="Dodatkowe informacje" name='info' value={info}/>
                        <label>Np. Firma, Lokal</label>
                      </div>
                      <div className="form-group col-md-2">
                        <input type="text" className="form-control" id="inputZip" placeholder="Kod" name='zip' value={zip}/>
                        <label>Np. 05-332</label>
                      </div>
                      <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="inputCity" placeholder="Miasto" name='city' value={city}/>
                        <label>Np. Warszawa</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='col-12'>
                  <h4>DOSTARCZENIE ZAMÓWIENIA</h4>
                  <p>Uwaga: jeśli chcesz zapłacić podczas odbioru przesyłki, musisz wybrać opcję z dostawą do domu.</p>
                  <form>
                    <div className='row'>
                      <label htmlFor="delivery" className='col-6'>
                        <div className={`col-12 ${styles.delivery}`}>
                          <p>DOSTAWA</p>
                          <p>Dostawa standardowa</p>
                          <p>8:00 - 18:00</p>
                          <div className={`col-12 ${styles.box}`}>
                            <input type="radio" id="delivery" name="delivery" value="delivery" />
                          </div>
                        </div>
                      </label>
                      <label htmlFor="shop" className='col-6'>
                        <div className={`col-12 ${styles.delivery}`}>
                          <p>ZE SKLEPU</p>
                          <p>Zarezerwuj online i odbierz w sklepie</p>
                          <p>9:00 - 21:00</p>
                          <div className={`col-12 ${styles.box}`}>
                            <input type="radio" id="shop" name="delivery" value="shop" />
                          </div>
                        </div>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className={styles.login}>
                <h4>ZALOGUJ SIĘ</h4>
                <form>
                  <div className="form-rows">
                    <div className="form-group col-12">
                      <input type="email" className="form-control" id="inputEmail" placeholder="E-mail" name='email' />
                    </div>
                    <div className="form-group col-12">
                      <input type="password" className="form-control" id="inputPassword" placeholder="Hasło" name='password' />
                    </div>
                    <div className='col-12'>
                      <button type="submit" className="btn btn-login">Zaloguj się</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.payment}>
                <h4>Wybierz sposób zapłaty</h4>
                <form>
                  <div className={`row ${styles.checkmarks}`}>
                    <label htmlFor="paypal" className='col-6'>PayPal</label>
                    <input type="radio" id="paypal" name="payment" value="paypal" className='col-6' />
                  </div>
                  <div className={`row ${styles.checkmarks}`}>
                    <label htmlFor="transfer" className='col-6'>Szybki przelew</label>
                    <input type="radio" id="transfer" name="payment" value="transfer" className='col-6' />
                  </div>
                  <div className={`row ${styles.checkmarks}`}>
                    <label htmlFor="blik" className='col-6'>Blik</label>
                    <input type="radio" id="blik" name="payment" value="blik" className='col-6' />
                  </div>
                  <div className={`row ${styles.checkmarks}`}>
                    <label htmlFor="cash" className='col-6'>Gotówka</label>
                    <input type="radio" id="cash" name="payment" value="cash" className='col-6' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

DeliveryPage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  address: PropTypes.string,
  info: PropTypes.string,
  city: PropTypes.string,
  zip: PropTypes.string,
  history: PropTypes.object,
};

export default DeliveryPage;
