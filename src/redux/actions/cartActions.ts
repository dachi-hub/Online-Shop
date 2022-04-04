export const addToCart = (item: any) => {
    return {
        type: "ADD_TO_CART",
        item,
    };
};

export const clear= () => {
    return {
        type: "CLEAR"
    };
};


