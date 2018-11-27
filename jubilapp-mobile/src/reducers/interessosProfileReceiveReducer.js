import {INTERESSOS_PROFILE_ACTIONS, LIST_ACTIVITIES_ACTIONS} from "../constants/actions";

const interessosTranslate= {
    art: {id: 0},
    sports: {id: 1},
    culture: {id: 2},
    trips: {id: 3},
    workshops: {id: 4},
    leisure: {id: 5}
}

const INITIAL_STATE ={
    interessos_info: [
        {
            id:0,
            estat:false,
            icon: require('../images/artPES.jpg'),
            nom:'Arte',
        },
        {
            id:1,
            estat:false,
            icon: require('../images/culturaPES.png'),
            nom:'Cultura',
        },
        {
            id:2,
            estat:false,
            icon: require('../images/esportPES.jpg'),
            nom:'Deporte',
        },
        {
            id:3,
            estat:false,
            icon: require('../images/excursionsPES.jpg'),
            nom:'Excursiones',
        },
        {
            id:4,
            estat:false,
            icon: require('../images/ocioPES.jpg'),
            nom:'Ocio',
        },
        {
            id:5,
            estat:false,
            icon: require('../images/tallersPES.jpg'),
            nom:'Talleres',
        }

    ]
}
const interessosProfileReceiveReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case INTERESSOS_PROFILE_ACTIONS.FetchInteressos:
            return state
        case INTERESSOS_PROFILE_ACTIONS.ChangeProperty:
            let result = {
                ...state
            }
            result[action.payload.propertyName]=state.interessos_info.map((interes)=>{
                if(interes.id == action.payload.value.id){
                    interes.estat = true;
                }
                return interes;
            });

            return result
        case INTERESSOS_PROFILE_ACTIONS.ReceiveInteressos:
            return {
                ...state,
                interessos: action.payload.map(interes=>{
                    console.log(state.interessos_info[interessosTranslate[interes].id]);
                    console.log(interessosTranslate[interes].id);
                    state.interessos_info[interessosTranslate[interes].id].estat = true

                })
            }
        case INTERESSOS_PROFILE_ACTIONS.RequestInteressos:
            return {
                ...state,
                interessos: []
            }

        default: return state

    }

}
export {interessosProfileReceiveReducer}