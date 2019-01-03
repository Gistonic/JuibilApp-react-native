import {INTERESSOS_PROFILE_ACTIONS} from "../constants/actions";

const interessosTranslate= {
    art: {id: 0},
    sports: {id: 1},
    culture: {id: 2},
    trips: {id: 3},
    workshops: {id: 4},
    leisure: {id: 5}
}

const INITIAL_STATE ={
    interessos_info:[
        {id:0,estat:false,icon: require('../images/artPES2.jpg'),iconBlancNegre: require('../images/artPES2BlancNegre.jpg'),nom:'Arte',},
        {id:1, estat:false,icon: require('../images/esportPES2.jpg'),iconBlancNegre: require('../images/esportPES2BlancNegre.jpg'),nom:'Deporte',},
        {id:2, estat:false,icon: require('../images/culturaPES2.jpg'),iconBlancNegre: require('../images/culturaPES2BlancNegre.jpg'),nom:'Cultura',},
        {id:3,estat:false,icon: require('../images/excursionesPES2.jpg'),iconBlancNegre: require('../images/excursionesPES2BlancNegre.jpg'),nom:'Excursiones',},
        {id:4,estat:false,icon: require('../images/talleresPES2.jpg'),iconBlancNegre: require('../images/talleresPES2BlancNegre.jpg'),nom:'Talleres',},
        {id:5,estat:false,icon: require('../images/ocioPES3.jpg'),iconBlancNegre: require('../images/ocioPES3BlancNegre.jpg'),nom:'Ocio',}
    ],
}

const interessosProfileReceiveReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case INTERESSOS_PROFILE_ACTIONS.FetchInteressos:
            return state
        case INTERESSOS_PROFILE_ACTIONS.ChangeProperty:
            
            const newInteressosInfo = [...state.interessos_info];
            newInteressosInfo[action.payload].estat = !newInteressosInfo[action.payload].estat;
            return { ...state, interessos_info: newInteressosInfo };

        case INTERESSOS_PROFILE_ACTIONS.ReceiveInteressos:
            return {
                ...state,
                interessos: action.payload.map(interes=>{
                    state.interessos_info[interessosTranslate[interes].id].estat = true
                })
            }
        case INTERESSOS_PROFILE_ACTIONS.RequestInteressos:
            const newInteressosInfo2 = [...state.interessos_info];
            action.payload.map(interes=>{
                newInteressosInfo2[interessosTranslate[interes].id].estat = true
            });
            return {...state, interessos_info: newInteressosInfo2};

        default: return state

    }

}
export {interessosProfileReceiveReducer}