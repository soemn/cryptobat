import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { loadNews } from '../reducers/news'

const News = props => (
  <div>
    <h5>News</h5>
    <button onClick={props.loadNews}> Load News </button>
  </div>
)

const mapStateToProps = state => ({
  title: state.news.title
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadNews,
      changePage: () => push('/News')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(News)
