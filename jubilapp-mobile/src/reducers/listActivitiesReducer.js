import {LIST_ACTIVITIES_ACTIONS} from "../constants/actions";

// TODO: Refactor API type from number to text!!
// const activitiesTranslate= {
//     art: {typeName: 'Arte', path: '../images/artPES2.jpg'},
//     sports: {typeName: 'Deportes', path: '../images/esportPES2.jpg'},
//     culture: {typeName: 'Cultura', path: '../images/culturaPES2.jpg'},
//     trips: {typeName: 'Excursiones', path: '../images/excursionsPES2.jpg'},
//     workshops: {typeName: 'Talleres', path: '../images/tallersPES2.jpg'},
//     leisure: {typeName: 'Ocio', path: '../images/ocioPES2.jpg'}
// }

const activitiesTranslate= [
    {typeName: 'Arte', path: '../images/artPES2.jpg'},
    {typeName: 'Deportes', path: '../images/esportPES2.jpg'},
    {typeName: 'Cultura', path: '../images/culturaPES2.jpg'},
    {typeName: 'Excursiones', path: '../images/excursionsPES2.jpg'},
    {typeName: 'Talleres', path: '../images/tallersPES2.jpg'},
    {typeName: 'Ocio', path: '../images/ocioPES2.jpg'}
]


const INITIAL_STATE = {
    activities: [],
    isFetching: false,
    modifyActivityId: null
};

export const listActivitiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_ACTIVITIES_ACTIONS.FetchActivities:
            return state
        case LIST_ACTIVITIES_ACTIONS.ReceiveActivities:
            return {...state, activities: action.payload, isFetching: false};
        case LIST_ACTIVITIES_ACTIONS.DeleteActivity:
            return state
        case LIST_ACTIVITIES_ACTIONS.RequestActivities:
            return {
                ...state,
                isFetching: true
            }

        case LIST_ACTIVITIES_ACTIONS.SetModifyActivityId:
            return {
                ...state,
                modifyActivityId: action.payload
            }
        default:
            return state

    }
}