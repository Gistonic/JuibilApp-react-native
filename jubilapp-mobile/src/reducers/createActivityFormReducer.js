import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    email: "",
    password:""
}
const createActivityFormReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case CREATE_ACTIVITY_FORM_ACTIONS.ChangeProperty:
            let result = {
                ...state
            }
            result[action.payload.propertyName]=action.payload.value
            return result
        default: return state

    }

}
export {createActivityFormReducer}