const localCart = localStorage.getItem('cart');
let products = [];

if (localCart) {
  products = JSON.parse(localCart);
}

export const initialState = {
  data: [],
  posts: [],
  cart: {
    cartItems: products,
  },
  requests: [],
};
