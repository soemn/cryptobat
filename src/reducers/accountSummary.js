import axios from 'axios'

export const GETBALANCE = 'accountSummary/GETBALANCE'

const initialState = {
  currency: '',
  balance: 10000,
  available: 9000,
  pending: 1000
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETBALANCE:
      return {
        ...state,
        currency: action.payload
      }
    default:
      return state
  }
}

export const getBalance = () => dispatch => {
  axios.get('http://localhost:9000/accountSummary').then(response => {
    let currency = response.data.result[2].Currency
    return dispatch({
      type: GETBALANCE,
      payload: currency
    })
  })
}
