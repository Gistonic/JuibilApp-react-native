import {LIST_ACTIVITIES_ACTIONS} from "../constants/actions";


const activitiesTranslate= {
    art: {typeName: 'Arte', path: '../images/artPES2.jpg'},
    sports: {typeName: 'Deportes', path: '../images/esportPES2.jpg'},
    culture: {typeName: 'Cultura', path: '../images/culturaPES2.jpg'},
    trips: {typeName: 'Excursiones', path: '../images/excursionsPES2.jpg'},
    workshops: {typeName: 'Talleres', path: '../images/tallersPES2.jpg'},
    leisure: {typeName: 'Ocio', path: '../images/ocioPES2.jpg'}
}


const INITIAL_STATE = {
    activities: []
};

export const listActivitiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_ACTIVITIES_ACTIONS.FetchActivities:
            return state
        case LIST_ACTIVITIES_ACTIONS.ReceiveActivities:
            return {
                ...state,
                activities: action.payload.map(activity=>{
                    const {name,path}=activitiesTranslate[activity.type]

                    return {
                        ...activity,// agafam la activity copia el mateix per no ser amb referencia i afegeix les dos noves propietats
                        typeName: name,
                        path: path
                    }
                })
            }
        case LIST_ACTIVITIES_ACTIONS.DeleteActivity:
            return state
        case LIST_ACTIVITIES_ACTIONS.RequestActivities:
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state

    }
}