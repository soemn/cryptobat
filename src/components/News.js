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
        <div>
          <ol>
            {this.props.headlines.map(headline => (
              <li key={headline.title}>
                <a href={headline.url}>{headline.title}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  headlines: state.news.headlines
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
