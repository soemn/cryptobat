import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { loadNews } from '../reducers/news'
import { chooseCurrPair } from '../reducers/navBar'
// import uuid from 'uuid/v4'

class News extends Component {
  componentDidMount() {
    this.props.loadNews()
  }

  getHeadlines(currency) {
    const allHeadlines = this.props.headlines.data
    const currencyToUse = this.props.currency2
    const size = 5

    if (allHeadlines) {
      const results = allHeadlines[currencyToUse].results.slice(0, size)
      return results.map((result, index) => {
        return (
          <li key={result.id}>
            <a href={result.url} target="_blank">
              {result.title}
            </a>
          </li>
        )
      })
    } else {
      return <div>Now Fetching News...</div>
    }
  }

  render() {
    return (
      <div>
        <h6>News</h6>
        <ol>{this.getHeadlines(this.props.currencyToUse)}</ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  headlines: state.news.headlines,
  currency2: state.navBar.currency2
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
