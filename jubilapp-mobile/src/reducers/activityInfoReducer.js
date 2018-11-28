import {ACTIVITY_INFO_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    idActivity: "",
    activityReceived: [],
}

const activityInfoReducer = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        case ACTIVITY_INFO_ACTIONS.FetchActivity:
            return state
        case ACTIVITY_INFO_ACTIONS.ChangeProperty:
            let result = {
                ...state
            }
            result[action.payload.propertyName]=action.payload.value
            return result
        case ACTIVITY_INFO_ACTIONS.ReceiveActivity:
            return {
                ...state,
                activityReceived: action.payload
            }
        default: return state
    }
}

export {activityInfoReducer}