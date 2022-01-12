import { combineReducers } from "redux";
import accountReducer from "./fundReducer"

const reducers = combineReducers(
    { account: accountReducer }
)

export default reducers;