import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {IProductsState, cartReducer,} from "./reducers/cartReducer";

export interface IState {
    postsReducer: IProductsState
}

export const store = createStore(
    combineReducers({cartReducer}),
    composeWithDevTools(applyMiddleware(thunk))
);
