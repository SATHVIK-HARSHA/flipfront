import { combineReducers } from "redux";
import { FilterReducer } from "./Filter/filterreducer";


const rootReducer = combineReducers({
  filter:FilterReducer
});

export default rootReducer;