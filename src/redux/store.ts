import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {cartReducer} from "./reducers/cartReducer";
import createSagaMiddleware from "redux-saga";

export const rootReducer = combineReducers({
    cart: cartReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers(rootReducer),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run();
