import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";
const INITIAL_STATE = {
    activities:[]
};
export const listActivitiesReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case CREATE_ACTIVITY_FORM_ACTIONS.FetchActivities:
            return state
        case CREATE_ACTIVITY_FORM_ACTIONS.ReceiveActivities:
            return {
                ...state,
                activities: action.payload
            }
        case CREATE_ACTIVITY_FORM_ACTIONS.RequestActivities:
            return {
                ...state,
                activities: []
            }

        default:
            return state

    }
}