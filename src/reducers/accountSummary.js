import axios from "axios"

export const GETBALANCE = "accountSummary/GETBALANCE"

const initialState = {
  currency: "",
  balance: 0,
  available: 0,
  pending: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETBALANCE:
      return {
        ...state,
        currency: action.payload.Currency,
        balance: action.payload.Balance,
        available: action.payload.Available,
        pending: action.payload.Pending
      }
    default:
      return state
  }
}

export const getBalance = () => dispatch => {
  axios.get("http://localhost:9000/accountSummary").then(response => {
    let allBalances = response.data.result
    let passedBalance = {}
    const currencyPair1 = "BTC"
    // const currencyPair2 = "ETH"
    for (var i = 0; i < allBalances.length; i++) {
      if (allBalances[i].Currency == currencyPair1) {
        passedBalance = allBalances[i]
      }
    }
    return dispatch({
      type: GETBALANCE,
      payload: passedBalance
    })
  })
}
