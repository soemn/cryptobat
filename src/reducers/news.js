import axios from 'axios'

export const LOADNEWS = 'reducers/LOADNEWS'

const initialState = {
  title: 'test title'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADNEWS:
      axios.get('http://localhost:9000/cryptoPanic/ETH').then(response => {
        console.log(response)
      })
      return {
        ...state,
        title: state.title
      }
    default:
      return state
  }
}

export const loadNews = () => {
  return dispatch => {
    dispatch({
      type: LOADNEWS
    })
  }
}
