import axios from "axios"

export const SHOW_STRATEGIES = "showTradingStrategies/SHOW_STRATEGIES"

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
    default:
      return state
  }
}

export const getStrategies = () => dispatch => {
  axios.get("http://localhost:9000/showAllStrategies").then(response => {
    let allStrategiesFromDB = response.data
    return dispatch({
      type: SHOW_STRATEGIES,
      payload: allStrategiesFromDB
    })
  })
}
