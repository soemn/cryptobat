import axios from 'axios'

export const LOADNEWS = 'reducers/LOADNEWS'

const initialState = {
  title: 'test title',
  token: 'btc'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADNEWS:
      axios
        .get('http://localhost:9000/cryptoPanic/' + state.token)
        // .then(response => {
        //   console.log(response)
        // })
        .then(response => {
          // let headline = response.data.map(header => {
          let headline = response.data.results.map(header => {
            console.log(header.title)
          })
          //   console.log(headline)
        })
      return {
        ...state,
        title: state.title
      }
      // })
      // })
      break
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
