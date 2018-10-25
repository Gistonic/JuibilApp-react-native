import { combineReducers, createStore, applyMiddleware } from 'redux'
import {registerFormReducer, authReducer} from "./reducers/";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {loginFormReducer} from "./reducers/loginFormReducer";
const rootReducer = combineReducers({
    auth: authReducer,
    registerForm:registerFormReducer,
    loginForm:loginFormReducer
})

const store= createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export {store}