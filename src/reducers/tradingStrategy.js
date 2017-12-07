import axios from "axios"

export const CREATE_STRATEGY = "tradingStrategy/CREATE_STRATEGY"
export const DELETE_STRATEGY = "tradingStrategy/DELETE_STRATEGY"

const initialState = {
  strategies: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STRATEGY:
      alert("CREATE_STRAT called")
      // document.getElementsByClassName('strategySelect').
      return {
        ...state,
        strategies: 1
      }
    case DELETE_STRATEGY:
      return {
        ...state,
        strategies: 2
      }
    default:
      return state
  }
}

export const createStrategy = () => dispatch => {
  axios
    .post("http://localhost:9000/tradingstrategy", {
      // BTC-ETH, BTC-OMG or ETH-OMG
      MarketName: "ETH-BTC",
      // false by default
      Active: false,
      // strategy type/name
      Type: "supportLine",
      // execution price
      Value: 0.027,
      // tradebuy or tradesell
      TradeType: "tradebuy",
      // quantity to hold?
      Quantity: 10,
      // same as value
      Rate: 0.027
    })
    .then(function(response) {
      // console.log(response)
    })
    .catch(function(error) {
      // console.log(error)
    })
  return dispatch({
    type: CREATE_STRATEGY
  })
}

export const deleteStrategy = () => dispatch => {
  // console.log('action triggered. strategy index:' + id)
  return dispatch({
    type: DELETE_STRATEGY
    // id: id
  })
}
