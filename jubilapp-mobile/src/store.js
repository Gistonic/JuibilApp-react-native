import { combineReducers, createStore, applyMiddleware } from 'redux'
import {registerFormReducer, authReducer, loginFormReducer, createActivityFormReducer,listActivitiesReducer, interessosProfileReceiveReducer} from "./reducers/";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const rootReducer = combineReducers({
    auth: authReducer,
    registerForm:registerFormReducer,
    loginForm:loginFormReducer,
    createActivityForm:createActivityFormReducer,
    listActivities:listActivitiesReducer,
    interessosProfile:interessosProfileReceiveReducer
})

const store= createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export {store}