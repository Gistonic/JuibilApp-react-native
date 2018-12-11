import {MODIFICAR_ACTIVITY_ACTIONS} from "../constants/actions";

const INITIAL_STATE = {
    isFetching: false,
    isPatching: false,
    value: ''
};

const modifyActivityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFICAR_ACTIVITY_ACTIONS.RequestActivityValue:
            return {
                ...state,
                isFetching: true
            };
        case MODIFICAR_ACTIVITY_ACTIONS.ReceiveActivityValue:
            return {
                ...state,
                isFetching: false,
                value: action.payload
            };
        case MODIFICAR_ACTIVITY_ACTIONS.RequestPatchActivityValue:
            return {
                ...state,
                isPatching: true
            };
        case MODIFICAR_ACTIVITY_ACTIONS.ReceivePatchActivityValue:
            return {
                ...state,
                isPatching: false
            };

        case MODIFICAR_ACTIVITY_ACTIONS.ChangeActivityValue:
            return {
                ...state,
                value: action.payload

            }
        default:
            return state
    }
};

export { modifyActivityReducer }