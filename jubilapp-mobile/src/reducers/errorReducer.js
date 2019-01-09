import { ERROR_ACTIONS } from "../constants";

const INITIAL_STATE = {
  error: null
}

const errorReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ERROR_ACTIONS.ShowError:
      return { ...state, error: action.payload }
    case ERROR_ACTIONS.ResetError:
      return { ...state, error: null }
    default:
      return state
  }
}

export { errorReducer }