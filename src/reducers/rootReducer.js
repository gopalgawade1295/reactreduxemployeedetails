import employeeReducer from "./employeeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ employeeReducer: employeeReducer })

export default rootReducer
