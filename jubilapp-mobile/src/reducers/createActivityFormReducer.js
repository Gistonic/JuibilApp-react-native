import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";
const date = new Date();
const initial_hour = date.getHours();
const initial_minute = date.getMinutes() - (date.getMinutes() % 5);
const INITIAL_STATE ={
    name: "",
    location:"",
    dateIni: "",
    dateEnd:"",
    hourEnd:0,
    minuteEnd: initial_minute,
    hourIni:initial_hour,
    minuteIni: initial_minute,
    description:"",
    selected_Arte: false,
    selected_Deporte: false,
    selected_Cultura: false,
    selected_Excursiones: false,
    selected_Talleres: false,
    selected_Ocio: false,
    type: "",
    startDate:"",
    endDate:""
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