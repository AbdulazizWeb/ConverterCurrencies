import { FETCH_CURRENCY_ERROR, FETCH_CURRENCY_START, FETCH_CURRENCY_SUCCESS } from "./actions/actionTypes";

const initialState = {
    currency: []
}

export const firstReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_CURRENCY_START:
            return {
            ...state
            }
        case FETCH_CURRENCY_SUCCESS:
            return {
                ...state, currency: action.currency
            }
        case FETCH_CURRENCY_ERROR:
            return {
                ...state
            }
    
        default:
         return state
    }
    
}