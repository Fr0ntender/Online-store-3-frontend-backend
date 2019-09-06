import Auth from '../services/Auth'
import prefixRequestAction from '../helper/prefixRequestAction'

export const [
    AUTHORIZE_START,
    AUTHORIZE_SUCCESS,
    AUTHORIZE_FAIL,
] = prefixRequestAction('AUTHORIZE')

export const [
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
] = prefixRequestAction('AUTHORIZE')

export const authorize = ({
    username,
    password
}) => dispath => {
    dispath({
        type: AUTHORIZE_START
    })

    if (username === 'test' & password === 'test') {
        dispath({
            type: AUTHORIZE_SUCCESS
        })
        Auth.login()
    } else {
        dispath({
            type: AUTHORIZE_FAIL,
            payload: "Password incorrect"
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_START
    })
    Auth.logout()
    dispatch({
        type: LOGOUT_SUCCESS
    })
}

export default function (state = {
    fetching: false,
    error: null,
    authorized: false,
}, action) {
    switch (action.type) {
        case AUTHORIZE_START:
            return {
                ...state,
                fetching: true
            };
        case AUTHORIZE_SUCCESS:
            return {
                ...state,
                fetching: false,
                authorized: true
            };
        case AUTHORIZE_FAIL:
            return {
                ...state,
                fetching: false,
                authorized: false
            };
        case LOGOUT_START:
            return {
                ...state,
                fetching: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                fetching: false,
                authorized: false,
            }
        default:
            return state;
    }
}