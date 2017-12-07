import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import {
  getStrategies,
  deleteStrategy
} from "../reducers/showTradingStrategies"

class ShowTradingStrategies extends Component {
  componentWillMount() {
    this.props.getStrategies()
  }

  showStrategies() {
    let allStrategies = this.props.allStrategiesFromDB
    console.log(allStrategies)
    return allStrategies.map((strategy, key) => {
      return (
        <tr key={key}>
          <td>{strategy.MarketName}</td>
          <td>{strategy.conditions[0].Type}</td>
          <td>{strategy.executions[0].TradeType}</td>
          <td>{strategy.conditions[0].Value}</td>
          <td>{strategy.executions[0].Quantity}</td>
          <td>
            <button onClick={() => this.props.deleteStrategy(strategy._id)}>
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h5>Currently Running Strategies</h5>
        <table>
          <thead>
            <tr>
              <th>Exchange</th>
              <th>Strategy Name</th>
              <th>Buy/Sell</th>
              <th>Execution Price</th>
              <th>Quantity to hold</th>
            </tr>
          </thead>
          <tbody>{this.showStrategies()}</tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allStrategiesFromDB: state.showTradingStrategies.allStrategies
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteStrategy,
      getStrategies,
      changePage: () => push("/ShowTradingStrategies")
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(
  ShowTradingStrategies
)
