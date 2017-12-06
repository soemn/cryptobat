import axios from "axios"

export const GETOPENORDERS = "openOrders/GETOPENORDERS"

const initialState = {
  allOpenOrders: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETOPENORDERS:
      // console.log("case met")
      return {
        ...state,
        allOpenOrders: action.payload
      }
    default:
      // console.log("default met")
      return state
  }
}

export const getOpenOrders = () => dispatch => {
  axios.get("http://localhost:9000/openorders").then(response => {
    // console.log("get request sent")
    let allOpenOrders = response
    // console.log(allOpenOrders)
    return dispatch({
      type: GETOPENORDERS,
      payload: allOpenOrders
    })
  })
}
