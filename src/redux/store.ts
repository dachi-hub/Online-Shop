import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";

export const store = createStore(
    combineReducers({ cartReducer }),
    composeWithDevTools(applyMiddleware())
);