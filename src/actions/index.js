// import axios from 'axios';

// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// export const requestLogin = () => dispatch => {
//     dispatch({ type: LOGIN_REQUEST });
//     axios
//         .get(URL)
//         .then(response => {
//             console.log(response);
//             dispatch({ type: LOGIN_SUCCESS, payload: response.data });
//         })
//         .catch(error => {
//             console.log(error.response);
//             dispatch({ type: LOGIN_FAILURE })
//         });
//     };
// }