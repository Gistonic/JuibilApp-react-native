import {PROFILE_ACTIONS} from "../constants/actions";


const INITIAL_STATE ={
    name:"" 
}
const modificarProfileReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case PROFILE_ACTIONS.FetchName:
            return state
        case PROFILE_ACTIONS.ReceiveName:
            return { ...state, name: action.payload }
        
        default: return state

    }

}
export {modificarProfileReducer}