import axios from "axios"

export const LOADNEWS = "reducers/LOADNEWS"

const initialState = {
  headlines: [{ title: "", url: "" }]
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
  axios.get("http://localhost:9000/cryptoPanic/").then(response => {
    let allResponses = response

    return dispatch({
      type: LOADNEWS,
      headlines: allResponses
    })
  })
}
