import { combineReducers } from "redux";
import { firstReducer } from './firstPage';

export const rootReducer = combineReducers({
    firstPage: firstReducer
})