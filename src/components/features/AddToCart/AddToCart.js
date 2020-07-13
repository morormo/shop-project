import React from 'react';
import styles from './AddToCart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class AddToCart extends React.Component {

  state = {
    cartQuantity: 1,
  }


  handleDecrease = (e) => {
    e.preventDefault();
    this.setState({
      cartQuantity: this.state.cartQuantity - 1,
    });
  }

  handleIncrease = (e) => {
    e.preventDefault();
    this.setState({
      cartQuantity: this.state.cartQuantity + 1,
    });
  }

  handleAddToCart = (e, post) => {
    e.preventDefault();
    this.props.addToCart(post, this.state.cartQuantity);
    this.props.history.push('/cart');

  }

  componentDidMount() {
    const { value } = this.props;
    value && this.setState({
      cartQuantity: value,
    });
  }

  render() {
    const { countInStock } = this.props.post;
    const { counter, btn } = this.props;
    return (
      <div className='container' >
        <div className='row'>
          <div className={styles.addToCart + counter.split(' ').map((name) => ' ' + (styles[name] || name)).join('')}>
            <button disabled={this.state.cartQuantity === 1 ? true : false} onClick={this.handleDecrease}>-</button>
            <span> {this.state.cartQuantity}</span>
            <button disabled={this.state.cartQuantity >= countInStock} onClick={this.handleIncrease}>+</button>
          </div>
          <div className={styles.addToCart + btn.split(' ').map((name) => ' ' + (styles[name] || name)).join('')}>
            <Button className={styles.options} variant='small' click={(e) => this.handleAddToCart(e, this.props.post)}>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> Dodaj do koszyka
            </Button>
          </div>
        </div >
      </div >
    );
  }
}

AddToCart.propTypes = {
  post: PropTypes.object,
  addToCart: PropTypes.func,
  history: PropTypes.object,
  counter: PropTypes.node,
  btn: PropTypes.node,
  value: PropTypes.node,
};

export default withRouter(AddToCart);

