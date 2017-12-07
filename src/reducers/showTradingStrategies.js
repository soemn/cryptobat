import axios from "axios"

export const SHOW_STRATEGIES = "showTradingStrategies/SHOW_STRATEGIES"

const initialState = {
  allStrategies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STRATEGIES:
      // console.log(action.payload)
      return {
        ...state,
        allStrategies: action.payload
      }
    default:
      // console.log("default")
      return state
  }
}

export const getStrategies = () => dispatch => {
  axios.get("http://localhost:9000/showAllStrategies").then(response => {
    // console.log(response.data)
    let allStrategiesFromDB = response.data
    return dispatch({
      type: SHOW_STRATEGIES,
      payload: allStrategiesFromDB
    })
  })
}
