import axios from "axios"

export const GETBALANCE = "accountSummary/GETBALANCE"

const initialState = {
  allBalances: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETBALANCE:
      return {
        ...state,
        allBalances: action.payload
      }
    default:
      return state
  }
}

export const getBalance = () => dispatch => {
  axios.get("//18.217.105.121/accountSummary").then(response => {
    let allBalance = response.data.result
    return dispatch({
      type: GETBALANCE,
      payload: allBalance
    })
  })
}
