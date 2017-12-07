import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"

import { createStrategy, deleteStrategy } from "../reducers/tradingStrategy"

class TradingStrategy extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h5>Trading Strategy</h5>
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
      changePage: () => push("/TradingStrategy")
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TradingStrategy)
