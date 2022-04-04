export interface ICartState {
    items: any[];
}

export const defaultState: ICartState = {
    items: [],
};

export const cartReducer = (state = defaultState, action: any) => {
    if (action.type === "ADD_TO_CART") {
        console.log(action);

        return {
            ...state,
            items: [...state.items, action.item],
        };
    }
    if (action.type === "CLEAR") {
        return {
            ...state,
            items: [],
        };
    }

    return state;
};
