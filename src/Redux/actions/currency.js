import axios from "axios";
import { FETCH_CURRENCY_START, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_ERROR } from './actionTypes';

export function fetchCurrency() {
    const BASE_URL = 'https://www.cbr-xml-daily.ru/latest.js'

    return async dispatch => {
        dispatch(fetchCurrencyStart())
        try {
             const res = await axios.get(`${BASE_URL}`)
        console.log(res);
        dispatch(fetchCurrencySuccess(res))
        
        } catch (error) {
            dispatch(fetchCurrencyError(error))
        }
       
    }


   
} 
export function fetchCurrencyStart() {
     return {
        type: FETCH_CURRENCY_START
     }   
}
export function fetchCurrencySuccess(currency) {
        return {
         type: FETCH_CURRENCY_SUCCESS,
         currency
     }   
}
export function fetchCurrencyError(e) {
    return {
         type: FETCH_CURRENCY_ERROR,
         error: e
    }   
}