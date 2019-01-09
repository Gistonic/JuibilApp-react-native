import {ACTIVITY_INFO_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    idActivity: "",
    activityReceived: [],
    ubicacioactual: "",
    isFetching: false
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
                activityReceived: action.payload,
                isFetching:false
            }
        case ACTIVITY_INFO_ACTIONS.DeleteActivity:
            return state
        case ACTIVITY_INFO_ACTIONS.RequestActivitats:
            return {...state, isFetching:true}
        default: return state
    }
}

export {activityInfoReducer}