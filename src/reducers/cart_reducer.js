import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    console.log(tempItem);
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color: color,
        amount: amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => {
      return item.id !== action.payload.id;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    let tempCart = [];
    let index = -1;
    tempCart = state.cart.map((item, idx) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          if (item.amount === 1) {
            index = idx; //save index
            // console.log(index);
            return { ...item, amount: 1 };
          } else {
            let newAmount = item.amount - 1;
            return { ...item, amount: newAmount };
          }
        }
      } else {
        return item;
      }
    });
    if (!(index === -1)) {
      tempCart.splice(index, 1); //splice index
    }
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { totalAmount, totalItems } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.totalItems += amount;
        total.totalAmount += price * amount;
        return total;
      },
      {
        totalAmount: 0,
        totalItems: 0,
      }
    );
    return { ...state, totalAmount, totalItems };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
