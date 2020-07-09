import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductPreview.module.scss';
import AddToCart from '../AddToCart/AddToCartContainer';


class ProductPreview extends React.Component {
  render() {
    const { name, prize, image} = this.props.product;

    return (
      <div className='root'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className={`col-12 col-lg-6 ${styles.photo}`}>
              <img src={image} alt={name}></img>
            </div>
            <div className={`col-12 col-lg-6 ${styles.specyfication}`}>
              <div className={styles.header}>
                <h1>{name}</h1>
                <h4>{prize}</h4>
              </div>
              <div className={styles.body}>
                <div className='row align-items-center'>
                  <div className='col-3 justify-content-center'>
                    <label>Rozmiar</label>
                    <select className='form-control'>
                      <option selected>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div className='col-6'>

                    <AddToCart product={this.props.product} btn='small' counter='' />
                  </div>
                </div>
              </div>
              <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus ante lectus, non ultrices augue tempus id. In at erat quis justo condimentum ullamcorper sit amet id nibh. Sed id ante at neque pellentesque imperdiet ac non sem. Fusce suscipit hendrerit ex vel placerat. Etiam posuere volutpat eleifend. Suspendisse lacus eros, vehicula eget ornare a, facilisis nec mi. Donec ac venenatis ex, at suscipit tortor.

              Praesent sodales nulla at lorem pulvinar euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet urna mi, sed sodales elit molestie vel. Mauris turpis nisi, aliquet hendrerit dictum vel, eleifend et felis. Aliquam vitae vehicula augue. Maecenas in mi mollis, iaculis lorem nec, pharetra velit. Nulla facilisi. In hac habitasse platea dictumst. Duis lectus turpis, ornare et ante sagittis, venenatis sagittis quam. Maecenas aliquet velit sapien, vel posuere eros pulvinar id. Fusce finibus neque justo, cursus accumsan magna pharetra sed. Fusce mattis rhoncus ullamcorper. Donec in ultricies turpis, vitae rhoncus mauris. Vestibulum consectetur rutrum ex quis aliquet.
              </div>
              <div className={styles.features}>
                <h5>Cechy:</h5>
                <ul>
                  <li>bez szwów bocznych,</li>
                  <li>dekolt wykończony dzianiną ściągaczową 1:1 z dodatkiem 5 % elastanu,</li>
                  <li>taśma wzmacniająca na ramionach,,</li>
                  <li>krój ze szwami bocznymi - (dziecięce rozmiary).,</li>
                </ul>
              </div>
              <div className={styles.time}>
              CZAS DOSTAWY: 48 GODZIN
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


ProductPreview.propTypes = {
  product: propTypes.array,
};

export default ProductPreview;
