import {MODIFICAR_ACTIVITY_ACTIONS} from "../constants/actions";
import {Actions} from "react-native-router-flux";


export const changeActivityValue = (value) => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.ChangeActivityValue,
        payload: value
    }
};


const requestPatchActivityValue = () => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.RequestPatchActivityValue
    }
};

const receivePatchActivityValue = () => {
    Actions.modificaractivitat();
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.ReceivePatchActivityValue
    }
};

export const patchActivityValue = (propertyName, value) => {
    return (dispatch) => {
        dispatch(requestPatchActivityValue())

        // Patch
        setTimeout(() => {
            dispatch(receivePatchActivityValue())
        }, 3000);
    }
};


const requestActivityValue = () => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.RequestActivityValue
    }
};

const receiveActivityValue = (value) => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.ReceiveActivityValue,
        payload: value
    }
};

export const fetchActivityValue = (propertyName) => {
    return (dispatch) => {
        dispatch(requestActivityValue())

        // GET
        setTimeout(() => {
            dispatch(receiveActivityValue('Name test'));
        }, 3000);
    }
};