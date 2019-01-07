import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";
const date = new Date();
const initial_hour = date.getHours();
const initial_minute = date.getMinutes() - (date.getMinutes() % 5);
const interessosTranslate= {
    0: {name: 'art'},
    1: {name: 'sports'},
    2: {name: 'culture'},
    3: {name: 'trips'},
    4: {name: 'workshops'},
    5: {name: 'leisure'}
};

const interessosTranslate2= {
    art: {id: 0},
    sports: {id: 1},
    culture: {id: 2},
    trips: {id: 3},
    workshops: {id: 4},
    leisure: {id: 5}
};
const INITIAL_STATE ={
    name: "",
    latitude: null,
    longitude: null,
    dateIni: {},
    dateEnd: {},
    hourIni:initial_hour,
    minuteIni: initial_minute,
    hourEnd: initial_hour,
    minuteEnd: initial_minute,
    description:"",
    type: "",
    startDate: null,
    endDate: null,
    ubi: "",
    interessos_info: [
        {id:0,estat:false,icon: require('../images/artPES2.jpg'),nom:'Arte',},
        {id:1,estat:false,icon: require('../images/esportPES2.jpg'),nom:'Deporte',},
        {id:2,estat:false,icon: require('../images/culturaPES2.jpg'),nom:'Cultura',},
        {id:3,estat:false,icon: require('../images/excursionesPES2.jpg'),nom:'Excursiones',},
        {id:4,estat:false,icon: require('../images/talleresPES2.jpg'),nom:'Talleres',},
        {id:5,estat:false,icon: require('../images/ocioPES3.jpg'),nom:'Ocio',}
    ],
    errors: {
        name: null,
        ubi: null,
        dateIni: null,
        dateEnd: null,
        hourIni: null,
        hourEnd: null,
        minuteIni: null,
        minuteEnd: null,
        type: null
    }
}
const createActivityFormReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case CREATE_ACTIVITY_FORM_ACTIONS.ChangeProperty:
            let result = {
                ...state
            }
            result[action.payload.propertyName]=action.payload.value
            return result
        case CREATE_ACTIVITY_FORM_ACTIONS.ChangeType:
            if(state.type == ""){
                const newInteressosInfo = [...state.interessos_info];
                const interes = interessosTranslate[action.payload].name;
                newInteressosInfo[action.payload].estat = !newInteressosInfo[action.payload].estat;
                return {...state, type: interes, interessos_info: newInteressosInfo}
            }
            else{
                const newInteressosInfo = [...state.interessos_info];
                const interes_antic_id = interessosTranslate2[state.type].id;
                newInteressosInfo[interes_antic_id].estat = false;
                newInteressosInfo[action.payload].estat = true;
                const interes_nou_nom = interessosTranslate[action.payload].name;
                return{...state, interessos_info: newInteressosInfo, type:interes_nou_nom}

            }
        case CREATE_ACTIVITY_FORM_ACTIONS.ErrorProperty:
            let resultError = {
                ...state
            }

            resultError.errors[action.payload.propertyName] = action.payload.error
            return resultError
        case CREATE_ACTIVITY_FORM_ACTIONS.ResetErrorProperty:
            let resetError = {
                ...state
            }
            resetError.errors[action.payload] = null
            return resetError
        default: return state

    }

}
export {createActivityFormReducer}