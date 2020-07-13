/* selectors */
export const getShoppingCart = ({ cart }) => cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

// action creators
export const createActionAddToCart = (payload, qty) => ({ payload: { ...payload, qty: qty }, type: ADD_TO_CART });
export const createActionRemoveFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

/* thunk creators */

export const addCartToStorage = (post, qty) => {
  return async dispatch => {

    let cart = [];
    let cartProducts = [];

    cartProducts = JSON.parse(localStorage.getItem('cart'));
    if (cartProducts === null) {
      cart = [{ _id: post._id, name: post.name, image: post.image, price: post.price, qty: qty, countInStock: post.countInStock }];
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      cart = JSON.parse(localStorage.getItem('cart'));
      cart.push({ _id: post._id, name: post.name, image: post.image, price: post.price, qty: qty, countInStock: post.countInStock });

      localStorage.setItem('cart', JSON.stringify(cart));

    }
    dispatch(createActionAddToCart(post, qty));
  };
};

export const removeCartFormLocalStorage = (id) => {
  return dispatch => {

    let cart;
    const cartProducts = JSON.parse(localStorage.getItem('cart'));
    localStorage.removeItem('cart');

    (cartProducts !== null) && (cart = cartProducts.filter(item => item._id !== id));

    localStorage.setItem('cart', JSON.stringify(cart));

    dispatch(createActionRemoveFromCart(id));
  };
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...statePart,
        cartItems: [...statePart.cartItems, action.payload],
      };
    case REMOVE_FROM_CART: {
      let cartItems = statePart.cartItems.filter(item => item.id !== action.payload);
      return {
        ...statePart,
        cartItems,
      };
    }

    default:
      return statePart;
  }
}
