import axios from "axios"

export const GETBALANCE = "accountSummary/GETBALANCE"

const initialState = {
  currency1: "",
  balance1: 0,
  available1: 0,
  pending1: 0,
  currency2: "",
  balance2: 0,
  available2: 0,
  pending2: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETBALANCE:
      console.log(action.payload)
      return {
        ...state,
        currency1: action.payload[0].Currency,
        balance1: action.payload[0].Balance,
        available1: action.payload[0].Available,
        pending1: action.payload[0].Pending,
        currency2: action.payload[1].Currency,
        balance2: action.payload[1].Balance,
        available2: action.payload[1].Available,
        pending2: action.payload[1].Pending
      }
    default:
      return state
  }
}

export const getBalance = () => dispatch => {
  axios.get("http://localhost:9000/accountSummary").then(response => {
    let allBalances = response.data.result
    let passedBalance = []
    // change this value according to dropdown list values
    const currencyPair1 = "OMG"
    const currencyPair2 = "ETH"
    for (var i = 0; i < allBalances.length; i++) {
      if (
        allBalances[i].Currency == currencyPair1 ||
        allBalances[i].Currency == currencyPair2
      ) {
        passedBalance.push(allBalances[i])
      }
    }
    return dispatch({
      type: GETBALANCE,
      payload: passedBalance
    })
  })
}
