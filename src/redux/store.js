import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import SearchReducer from "./reducers/search.reducer";
import FavoritesReducer from "./reducers/favorites.reducer"

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  SearchReducer,
  FavoritesReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
