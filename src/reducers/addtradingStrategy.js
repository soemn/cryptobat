import axios from "axios"

export const CREATE_STRATEGY = "addtradingStrategy/CREATE_STRATEGY"
export const DELETE_STRATEGY = "addtradingStrategy/DELETE_STRATEGY"

const initialState = {
  strategies: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STRATEGY:
      alert("Strategy added!")

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
  let marketName = document.getElementsByClassName("strategyfield")[0].value

  let strategyType = document.getElementsByClassName("strategyfield")[3].value

  let executionPrice = document.getElementsByClassName("strategyfield")[1].value

  let tradeBuyOrSell = document.getElementsByClassName("strategyfield")[2].value

  let quantityToHold = document.getElementsByClassName("strategyfield")[4].value

  axios
    .post("http://localhost:9000/tradingstrategy", {
      // BTC-ETH, BTC-OMG or ETH-OMG
      MarketName: marketName,
      // true by default
      Active: true,
      // strategy type/name
      Type: strategyType,
      // execution price
      Value: executionPrice,
      // tradebuy or tradesell
      TradeType: tradeBuyOrSell,
      // quantity to hold?
      Quantity: quantityToHold,
      // same as value
      Rate: executionPrice
    })
    .then(function(response) {})
    .catch(function(error) {})
  return dispatch({
    type: CREATE_STRATEGY
  })
}

export const deleteStrategy = () => dispatch => {
  return dispatch({
    type: DELETE_STRATEGY
  })
}
