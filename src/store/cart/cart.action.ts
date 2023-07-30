import ProductInterface from "../../interfaces/product-interface";

export const addToCart = (cart: ProductInterface[], payload: ProductInterface) => {
    return [...cart, payload];
}

export const increaseQuantity = (cart: ProductInterface[], payload: ProductInterface) => {
    return cart.map((product) =>
        product._id === payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
    );
}

export const decreaseQuantity = (cart: ProductInterface[], payload: ProductInterface) => {
    return cart.map((product) =>
        product._id === payload._id
            ? { ...product, quantity: product.quantity - 1 }
            : product
    );
}

export const removeFromCart = (cart: ProductInterface[], payload: ProductInterface) => {
    return cart.filter((product) => product._id !== payload._id);
}

export const clearCart = () => {
    return [];
}
