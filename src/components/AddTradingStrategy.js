import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import { createStrategy, deleteStrategy } from '../reducers/addtradingStrategy'

class AddTradingStrategy extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="TradingStrategy">
        <h5>Add trading strategy</h5>
        <div className="tradingrow">
          Select currency pair:{' '}
          <select classname="strategyfield">
            <option selected hidden>
              Select
            </option>
            <option value="ETH-OMG">ETH-OMG</option>
            <option value="BTC-ETH">BTC-ETH</option>
            <option value="BTC-OMG">BTC-OMG</option>
          </select>
          <form>
            Execution price:{' '}
            <input
              classname="strategyfield"
              type="number"
              value="value"
              placeholder="Price"
            />
          </form>
          Trade:
          <select classname="strategyfield">
            <option selected hidden>
              Select
            </option>
            <option value="tradebuy">Buy</option>
            <option value="tradesell">Sell</option>
          </select>
          Trade type:
          <select classname="strategyfield">
            <option selected hidden>
              Select
            </option>
            <option value="supportLine">Support</option>
            <option value="resistanceLine">Resistance</option>
          </select>
          <form>
            Quantity to hold:{' '}
            <input
              classname="strategyfield"
              type="number"
              value="quantity"
              placeholder="Quantity"
            />
          </form>
          Activate:
          <select classname="strategyfield">
            <option selected hidden>
              Select
            </option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          <button onClick={this.props.createStrategy}>ADD</button>
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
      changePage: () => push('/AddTradingStrategy')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AddTradingStrategy)
