export const REGISTER_FORM_ACTIONS={
    ChangeProperty: "CHANGE_REGISTER_PROPERTY",
    ReceiveRegister: "RECEIVE_REGISTER"
}

export const LOGIN_FORM_ACTIONS={
    ChangeProperty: "CHANGE_LOGIN_PROPERTY",
    ReceiveLogin: "RECEIVE_LOGIN",
    ReceiveLoginError: "RECEIVE_LOGIN_ERROR",
    ResetLoginError: "RESET_LOGIN_ERROR"
}
export const CREATE_ACTIVITY_FORM_ACTIONS={
    ChangeProperty: "CHANGE_CREATE_ACTIVITY_PROPERTY",
    ReceiveLogin: "RECEIVE_CREATE_ACTIVITY",
    ChangeType: "CHANGE_TYPE",
    ErrorProperty: "ERROR_CREATE_ACTIVITY_PROPERTY",
    ResetErrorProperty: "RESET_ERROR_CREATE_ACTIVITY_PROPERTY"
}

export const LIST_ACTIVITIES_ACTIONS={
    FetchActivities: 'FETCH_ACTIVITIES',
    ReceiveActivities: 'RECEIVE_ACTIVITIES',
    RequestActivities: 'REQUEST_ACTIVITIES',
    DeleteActivity: 'DELETE_ACTIVITY',
    SetModifyActivityId:'SET_MODIFY_ACTIVITY_ID',
}

export const FICHAS_ACTIONS={
    FetchFichas: 'FETCH_ACTIVITIES',
    ReceiveFichas: 'RECEIVE_FICHAS'
}

export const INTERESSOS_PROFILE_ACTIONS={
    ChangeProperty: 'CHANGE_INTERESSOS_PROPERTY',
    FetchInteressos: 'FETCH_INTERESSOS',
    ReceiveInteressos: 'RECEIVE_INTERESSOS',
    RequestInteressos: 'REQUEST_INTERESSOS',
}

export const ACTIVITY_INFO_ACTIONS= {
    FetchActivity: 'FETCH_ACTIVITY',
    ChangeProperty: 'CHANGE_ACTIVITY_ID_PROPERTY',
    ReceiveActivity: 'RECEIVE_ACTIVITY',
    DeleteActivity: 'DELETE_ACTIVITY',

}

export const KILOMETRES_PROFILE_ACTIONS={
    ChangeProperty: 'CHANGE_KILOMETRES_PROPERTY',
    FetchKilometres:'FETCH_KILOMETRES',
    ReceiveKilometres: 'RECEIVE_KILOMETRES',
    RequestKilometres: 'REQUEST_KILOMETRES'
}

export const BUSCAR_ACTIVITY_ACTIONS={
    FetchActivitats: 'BUSCAR_FETCH_ACTIVITATS',
    RecieveActivitats: 'BUSCAR_RECIEVE_ACTIVITATS',
    ChangeIterador: 'BUSCAR_CHANGE_ITERADOR',
    ChangeProperty: 'BUSCAR_CHANGE_PROPERTY',
    ChangeProperty2: 'BUSCAR_CHANGE_PROPERTY2',
    Attend: 'BUSCAR_ATTEND',
    ErrorProperty: 'BUSCAR_ERROR_PROPERTY',
    ResetErrorProperty: 'BUSCAR_RESET_ERROR_PROPERTY'
}

export const MODIFICAR_ACTIVITY_ACTIONS = {
    RequestActivityValue: 'FETCH_ACTIVITY_VALUE',
    ReceiveActivityValue: 'RECEIVE_ACTIVITY_VALUE',
    ChangeActivityValue: 'CHANGE_ACTIVITY_VALUE',
    RequestPatchActivityValue: 'REQUEST_PATCH_ACTIVITY_VALUE',
    ReceivePatchActivityValue: 'RECEIVE_PATCH_ACTIVITY_VALUE'
}

export const PROFILE_ACTIONS = {
    FetchName: 'FETCH_NAME',
    ReceiveName: 'RECEIVE_NAME',
    ReceiveInterests: 'RECEIVE_INTERESTS',
    ReceiveKilometres: 'RECEIVE_KILOMETRES',
}

export const VALORAR_ACTIVITY_ACTIONS = {
    FetchActivitatsValorar: 'FETCH_ACTIVITATS_VALORAR',
    RebreActivitats: 'REBRE_ACTIVITATS',
    ChangeStar: 'CHANGE_STAR',
    ReiniciarStars: 'REINICIAR_STARS',
    ChangeIterator: 'CHANGE_ITERATOR',
    RequestActivitats: 'REQUEST_ACTIVITATS',
    ChangePropietat: 'CHANGE_PROPIETAT'
}