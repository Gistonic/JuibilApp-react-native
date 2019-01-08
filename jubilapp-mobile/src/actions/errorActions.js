import { ERROR_ACTIONS } from "../constants";

const resetError = () => {
  return {
    type: ERROR_ACTIONS.ResetError
  }
}

const showErrorInternal = (error) => {
  return {
    type: ERROR_ACTIONS.ShowError,
    payload: error
  }
}

export const showError = (error) => {
  return (dispatch) => {
    dispatch(showErrorInternal(error))

    setTimeout(() => {
      dispatch(resetError())
    }, 3000)
  }
}