import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { loadNews } from '../reducers/news'

class News extends Component {
  componentDidMount() {
    this.props.loadNews()
  }
  render() {
    return (
      <div>
        <h5>News</h5>
        <p> Title: {this.props.title} </p>
      </div>
    )
  }
}

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
