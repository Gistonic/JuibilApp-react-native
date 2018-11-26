import {LIST_ACTIVITIES_ACTIONS} from "../constants/actions";
const INITIAL_STATE = {
    activities:[]
};
export const listActivitiesReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case LIST_ACTIVITIES_ACTIONS.FetchActivities:
            return state
        case LIST_ACTIVITIES_ACTIONS.ReceiveActivities:
            return {
                ...state,
                activities: action.payload
            }
        case LIST_ACTIVITIES_ACTIONS.RequestActivities:
            return {
                ...state,
                activities: []
            }

        default:
            return state

    }
}