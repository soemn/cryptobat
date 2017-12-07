import axios from 'axios'

export const CREATE_STRATEGY = 'addtradingStrategy/CREATE_STRATEGY'
export const DELETE_STRATEGY = 'addtradingStrategy/DELETE_STRATEGY'

const initialState = {
  strategies: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STRATEGY:
      alert('CREATE_STRAT called')
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
    .post('http://localhost:9000/tradingstrategy', {
      MarketName: 'TEST marketname',
      Active: false,
      Type: 'TEST type',
      Value: 456,
      TradeType: 'TEST TradeType',
      Quantity: 9999,
      Rate: 123
    })
    .then(function(response) {
      // console.log(response)
    })
    .catch(function(error) {
      // console.log(error)
    })
  return dispatch({
    type: CREATE_STRATEGY
    // strategy: strategy
  })
}

export const deleteStrategy = () => dispatch => {
  // console.log('action triggered. strategy index:' + id)
  return dispatch({
    type: DELETE_STRATEGY
    // id: id
  })
}
