import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";

const recieveActivities =(products)=>{
    return {
        type: CREATE_ACTIVITY_FORM_ACTIONS.ReceiveActivities,
        payload: products
    }
}
const requestActivities =()=>{
    return {
        type: CREATE_ACTIVITY_FORM_ACTIONS.RequestActivities,
    }
}

export const fetchActivities = () => {
    return(dispatch)=>{
        dispatch(requestActivities())
        fetch('URL').then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(json => {
            dispatch(recieveActivities(json))
        })
    }
}