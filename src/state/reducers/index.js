import { combineReducers } from "redux";
import fundReducer from "./fundReducer"

const reducers = combineReducers(
    { funds: fundReducer }
)

export default reducers;