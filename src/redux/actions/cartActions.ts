export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';

export const addToCart = (id:number)=> {
    return {
        type: ADD_TO_CART,
        id
    };
};
export const removeFromCart = (id:number)=> {
    return {
        type: REMOVE_FROM_CART,
        id,
    };
};

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    };
};