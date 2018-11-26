import {INTERESSOS_PROFILE_ACTIONS} from "../constants/actions";
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
const interessosProfileReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

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

        default: return state

    }

}
export {interessosProfileReducer}