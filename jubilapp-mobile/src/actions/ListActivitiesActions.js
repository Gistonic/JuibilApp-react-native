import {LIST_ACTIVITIES_ACTIONS} from "../constants/actions";

const recieveActivities =(activities)=>{
    return {
        type: LIST_ACTIVITIES_ACTIONS.ReceiveActivities,
        payload: activities
    }
}
const requestActivities =()=>{
    return {
        type: LIST_ACTIVITIES_ACTIONS.RequestActivities,
    }
}

export const fetchActivities = () => {
    return(dispatch)=>{
      //  dispatch(requestActivities())


        setTimeout(() => {
            dispatch(recieveActivities(activitiesMock))
        }, 1000)
        // fetch('URL').then(response=>{
        //     if(response.ok){
        //         return response.json()
        //     }
        // }).then(json => {
        //     dispatch(recieveActivities(json))
        // })
    }
}





const activitiesMock = [
    {
        id: 0,
        name:'yoga',
        description: 'clase de yoga super guay',
        type: 'sports',
        startDate: Date,
        endDate: Date

    },
    {
        id: 1,
        name:'mirar obras',
        description: 'mirar las obras de la sagrada familia',
        type: 'leisure',
        startDate: Date,
        endDate: Date
    }

]