export const CREATE_STRATEGY = 'tradingStrategy/CREATE_STRATEGY'
export const DELETE_STRATEGY = 'tradingStrategy/DELETE_STRATEGY'

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
