import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import { getOpenOrders } from "../reducers/openOrders"

class Orders extends Component {
  componentWillMount() {
    this.props.getOpenOrders()
  }

  showOpenOrders() {
    let allOpenOrders = this.props.allOpenOrders
    return allOpenOrders.map((order, key) => {
      return (
        <tr key={key}>
          <td>{order.Exchange}</td>
          <td>{order.Opened}</td>
          <td>{order.OrderType}</td>
          <td>{order.Limit}</td>
          <td>{order.Quantity}</td>
          <td>{order.QuantityRemaining}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h5>Open Orders</h5>
        <table className="responsive-table highlight">
          <thead>
            <tr>
              <th>Exchange</th>
              <th>Opened</th>
              <th>Order Type</th>
              <th>Limit</th>
              <th>Quantity</th>
              <th>Quantity Remaining</th>
            </tr>
          </thead>

          <tbody>{this.showOpenOrders()}</tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allOpenOrders: state.openOrders.allOpenOrders
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getOpenOrders,
      changePage: () => push("/Orders")
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
