import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";
import {request} from "../request";
import {Actions} from "react-native-router-flux";

export const changeCreateActivityFormProperty=(propertyName, value) =>{
    return {
        type:CREATE_ACTIVITY_FORM_ACTIONS.ChangeProperty,
        payload:{
            propertyName,
            value
        }
    }
};

export const changeType = (id) =>{
    return{
        type: CREATE_ACTIVITY_FORM_ACTIONS.ChangeType,
        payload: id
    }
}

export const createActivity = (activityInfo) => {
    return () => {
        request('/event', 'POST', activityInfo);
        Actions.home();
    }
}
