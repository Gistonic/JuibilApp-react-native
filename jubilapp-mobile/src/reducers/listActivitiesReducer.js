import {LIST_ACTIVITIES_ACTIONS} from "../constants/actions";


const activitiesTranslate= {
    art: {name: 'Arte', path: '../images/artPES.jpg'},
    sports: {name: 'Deportes', path: '../images/esportPES.jpg'},
}
/*this.props.activitiesTypes.set('culture', {name: 'Cultura', path: '../images/culturaPES.png'});
this.props.activitiesTypes.set('trips', {name: 'Excursiones', path: '../images/excursionsPES.jpg'});
this.props.activitiesTypes.set('workshops', {name: 'Talleres', path: '../images/tallersPES.jpg'});
this.props.activitiesTypes.set('leisure', {name: 'Ocio', path: '../images/ocioPES.jpg'});*/


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
                        name: name,
                        path: path
                    }
                })
            }
        case LIST_ACTIVITIES_ACTIONS.RequestActivities:
            return {
                ...state,
                activities: []
            }

        default:
            return state

    }
}