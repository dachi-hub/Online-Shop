import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART,
} from "../actions/cartActions"

export interface iProduct {
    id: number;
    img: string;
    name: string;
    model: string;
    type: string;
    socket: string;
    price: string;
    inCart: boolean;
}

export interface IProductsState {
    products: iProduct[];
    product: iProduct;
}

const defaultState: IProductsState = {
    products: [],
    product: {
        id: 0,
        img: "",
        name: "",
        model: "",
        type: "",
        socket: "",
        price: "",
        inCart: false,
    },
};

export const cartReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.product? {...product, inCart: true} : product,
                ),
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {...product, inCart: false, quantity: 1}
                        : product,
                ),
            };

        case EMPTY_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.inCart
                        ? {...product, selected: false, quantity: 1}
                        : product,
                ),
            };

        default:
            return state;
    }
};