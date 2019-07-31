import axios from 'axios';
import { useStoredLocalVal } from '../hooks/useStoredLocalVal';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const requestLogin = (credentials) => dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    axios
        .post('https://bw-bucket-list.herokuapp.com/api/login', credentials)
        .then(response => {
            useStoredLocalVal 
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
         })
        .catch(error => {
            console.log(error.response);
            dispatch({ type: LOGIN_FAILURE })
        });
}
