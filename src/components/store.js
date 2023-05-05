import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { FilterReducer } from "./Filter/filterreducer";


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    filter:FilterReducer
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;