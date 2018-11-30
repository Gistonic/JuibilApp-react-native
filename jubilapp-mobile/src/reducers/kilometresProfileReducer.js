import {KILOMETRES_PROFILE_ACTIONS} from "../constants/actions";


const INITIAL_STATE ={
    km_selected: 15,
    array_codi : [
        {id:0,num:5},
        {id:1,num:10},
        {id:2,num:15},
        {id:3,num:20},
        {id:4, num:25},
        {id:5,num:30}
    ]
}
const kilometresProfileReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case KILOMETRES_PROFILE_ACTIONS.FetchKilometres:
            return state
        case KILOMETRES_PROFILE_ACTIONS.ChangeProperty:
            return { ...state, km_selected: action.payload }

        case KILOMETRES_PROFILE_ACTIONS.ReceiveKilometres:
            return { ...state, km_selected: action.payload }
        case KILOMETRES_PROFILE_ACTIONS.RequestKilometres:
            return {
                ...state
            }

        default: return state

    }

}
export {kilometresProfileReducer}