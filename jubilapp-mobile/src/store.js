import { combineReducers, createStore, applyMiddleware } from 'redux'
import {registerFormReducer, authReducer, loginFormReducer, buscarActivityReducer, createActivityFormReducer,listActivitiesReducer, interessosProfileReceiveReducer, activityInfoReducer} from "./reducers/";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { kilometresProfileReducer } from './reducers/kilometresProfileReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    registerForm:registerFormReducer,
    loginForm:loginFormReducer,
    createActivityForm:createActivityFormReducer,
    listActivities:listActivitiesReducer,
    interessosProfile:interessosProfileReceiveReducer,
    activityInfoForm: activityInfoReducer,
    kilometresProfile: kilometresProfileReducer,
    buscarActivity: buscarActivityReducer
})

const store= createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export {store}