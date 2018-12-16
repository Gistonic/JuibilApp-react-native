import {PROFILE_ACTIONS} from "../constants/actions";

const interessosTranslate= {
    art: {id: 0},
    sports: {id: 1},
    culture: {id: 2},
    trips: {id: 3},
    workshops: {id: 4},
    leisure: {id: 5}
}

const INITIAL_STATE ={
    name:"" ,
    interessos:[
        {id:0,estat:false,icon: require('../images/artPES2.jpg'),iconBlancNegre: require('../images/artPES2BlancNegre.jpg'),nom:'Arte',},
        {id:1, estat:false,icon: require('../images/esportPES2.jpg'),iconBlancNegre: require('../images/esportPES2BlancNegre.jpg'),nom:'Deporte',},
        {id:2, estat:false,icon: require('../images/culturaPES2.jpg'),iconBlancNegre: require('../images/culturaPES2BlancNegre.jpg'),nom:'Cultura',},
        {id:3,estat:false,icon: require('../images/excursionesPES2.jpg'),iconBlancNegre: require('../images/excursionesPES2BlancNegre.jpg'),nom:'Excursiones',},
        {id:4,estat:false,icon: require('../images/talleresPES2.jpg'),iconBlancNegre: require('../images/talleresPES2BlancNegre.jpg'),nom:'Talleres',},
        {id:5,estat:false,icon: require('../images/ocioPES3.jpg'),iconBlancNegre: require('../images/ocioPES3BlancNegre.jpg'),nom:'Ocio',}
    ],
    km:15
}
const modificarProfileReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case PROFILE_ACTIONS.FetchName:
            return state
        case PROFILE_ACTIONS.ReceiveName:
            return { ...state, name: action.payload.value}
        case PROFILE_ACTIONS.ReceiveKilometres:
            return {...state,km:action.payload.value}
        case PROFILE_ACTIONS.ReceiveInterests:
            const newInteressos = [...state.interessos];
            action.payload.value.map(interes=>{
                newInteressos[interessosTranslate[interes].id].estat = true
            });
            return {...state, interessos: newInteressos};
        
        default: return state

    }

}
export {modificarProfileReducer}