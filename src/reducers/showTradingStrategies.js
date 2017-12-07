import axios from "axios"

export const SHOW_STRATEGIES = "showTradingStrategies/SHOW_STRATEGIES"
export const DELETE_STRATEGY = "showTradingStrategies/DELETE_STRATEGY"

const initialState = {
  allStrategies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STRATEGIES:
      return {
        ...state,
        allStrategies: action.payload
      }
    case DELETE_STRATEGY:
      return {
        ...state,
        allStrategies: action.payload
      }
    default:
      return state
  }
}

export const getStrategies = () => dispatch => {
  axios.get("http://18.217.105.121/showAllStrategies").then(response => {
    let allStrategiesFromDB = response.data
    return dispatch({
      type: SHOW_STRATEGIES,
      payload: allStrategiesFromDB
    })
  })
}

export const deleteStrategy = id => dispatch => {
  axios
    .post("http://18.217.105.121/deleteStrategy", {
      _id: id
    })
    .then(response => {
      let allStrategiesFromDB = response.data
      return dispatch({
        type: DELETE_STRATEGY,
        payload: allStrategiesFromDB
      })
    })
}
