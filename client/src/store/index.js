import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import modalsReducer from '../ducks/modals'
import productCardReducer from '../ducks/productCard'
import authorizationReducer from '../ducks/authorization'


const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
    modals: modalsReducer,
    authorization: authorizationReducer,
    productCard: productCardReducer

})

export const initialState = {}

const getInitialState = () => {
    if (localStorage.getItem('sessionData') === 'true') {
        initialState.authorization = {
            authorized: true
        }
    }

    return initialState;
}

export default createStore(rootReducer, getInitialState(), composeEnhancers(
    middleware,
))