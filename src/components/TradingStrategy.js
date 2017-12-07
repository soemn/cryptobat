import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import { createStrategy, deleteStrategy } from '../reducers/tradingStrategy'

class TradingStrategy extends Component {
  componentDidMount() {
    // this.props.createStrategy()
    // this.props.deleteStrategy()
  }

  render() {
    return (
      <div className="TradingStrategy">
        <h5>Trading Strategy</h5>
        <div className="tradingrow">
          Select currency pair:{' '}
          <select>
            <option value="ETH-OMG">ETH-OMG</option>
            <option value="BTC-ETH">BTC-ETH</option>
            <option value="BTC-OMG">BTC-OMG</option>
          </select>
          <form>
            Buy/Sell:<input type="number" placeholder="Price" />
          </form>
          <button onClick={this.props.createStrategy}>Submit</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currency1: state.navBar.currency1,
  currency2: state.navBar.currency2,
  allBalances: state.accountSummary.allBalances
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createStrategy,
      deleteStrategy,
      changePage: () => push('/TradingStrategy')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TradingStrategy)
