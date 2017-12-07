import axios from "axios"

export const GETOPENORDERS = "openOrders/GETOPENORDERS"

const initialState = {
  allOpenOrders: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETOPENORDERS:
      return {
        ...state,
        allOpenOrders: action.payload
      }
    default:
      return state
  }
}

export const getOpenOrders = () => dispatch => {
  axios.get("http://localhost:9000/openorders").then(response => {
    let allOpenOrders = response.data.result
    return dispatch({
      type: GETOPENORDERS,
      payload: allOpenOrders
    })
  })
}
