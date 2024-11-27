// cartUtils.js
export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const addItemToLocalStorageCart = (item) => {
    const cart = getCartFromLocalStorage();
    const existingItem = cart.find((cartItem) => cartItem.product_id === item.product_id);
  
    if (existingItem) {
      // Update the quantity if the item already exists
      existingItem.quantity += item.quantity;
    } else {
      // Add new item to the cart
      cart.push(item);
    }
  
    saveCartToLocalStorage(cart);
  };
  
  export const removeItemFromLocalStorageCart = (productId) => {
    const cart = getCartFromLocalStorage();
    const updatedCart = cart.filter((item) => item.product_id !== productId);
    saveCartToLocalStorage(updatedCart);
  };
  
  