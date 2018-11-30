import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";
import {request} from "../request";

export const changeCreateActivityFormProperty=(propertyName, value) =>{
    return {
        type:CREATE_ACTIVITY_FORM_ACTIONS.ChangeProperty,
        payload:{
            propertyName,
            value
        }
    }
};

export const createActivity = (activityInfo) => {
    return () => {
        request('/event', 'POST', activityInfo);
    }
}
