import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import { createStrategy, deleteStrategy } from '../reducers/tradingStrategy'

class TradingStrategy extends Component {
  componentDidMount() {}

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
            Execution price:{' '}
            <input type="number" value="value" placeholder="Price" />
          </form>
          Activate
          <select>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          Trade
          <select>
            <option value="tradebuy">Buy</option>
            <option value="tradesell">Sell</option>
          </select>
          Trade type
          <select>
            <option value="supportLine">Support</option>
            <option value="resistanceLine">Resistance</option>
          </select>
          <form>
            Quantity to hold:{' '}
            <input type="number" value="quantity" placeholder="Quantity" />
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
