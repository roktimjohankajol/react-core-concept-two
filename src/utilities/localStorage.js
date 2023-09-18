const getStoredCart = () => {
    const storedCartString = localStorage.getItem('item');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLS = cart => {
    const cartToStringified = JSON.stringify(cart); 
    localStorage.setItem('cart', cartToStringified)
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLS(cart);
}

export {addToLS}