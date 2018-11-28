import {ACTIVITY_INFO_ACTIONS} from "../constants/actions";
import Actions from "react-native-router-flux";

export const changeActivityIDProperty = (propertyName, value) => {
    return {
        type: ACTIVITY_INFO_ACTIONS.ChangeProperty,
        payload: {
            propertyName,
            value
        }
    }
}

export const fetchActivity = () => {

}