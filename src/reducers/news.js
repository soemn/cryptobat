import axios from 'axios'

export const LOADNEWS = 'reducers/LOADNEWS'

const initialState = {
  token: 'btc',
  headlines: [{ title: '', url: '' }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADNEWS:
      return {
        ...state,
        headlines: action.headlines
      }
    default:
      return state
  }
}

export const loadNews = (state = initialState) => dispatch => {
  axios
    .get('http://localhost:9000/cryptoPanic/' + state.token)
    .then(response => {
      let headlines = []
      headlines = response.data.results.map(header => {
        return header
      })

      return dispatch({
        type: LOADNEWS,
        headlines: headlines
      })
    })
}
