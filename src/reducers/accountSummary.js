import axios from 'axios'

export const GETBALANCE = "counter/GETBALANCE"

const initialState = {
  balance: 10000,
  available: 9000,
  pending: 1000
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETBALANCE:
      axios.get("http://localhost:9000/accountSummary")
        .then(response => {
         console.log(response)
        })
      return {
        ...state
      }
    default:
      return state
  }
}

export const getBalance = () => {
  return dispatch => {
    dispatch({
      type: GETBALANCE
    })
  }
}
