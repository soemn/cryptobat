import axios from 'axios'
import React, { Component } from 'react'

export const LOADNEWS = 'reducers/LOADNEWS'





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
}
