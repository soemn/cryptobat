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
      axios.get("http://localhost:9000/account_information")
        .then(response => {
         console.log('hello')
        })
      return {
        ...state,
        balance: state.balance + 1,
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
