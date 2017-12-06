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
    let orderDetails = allOpenOrders.map(order => {
      return (
        <div>
          <p>Exchange:{order.Exchange}</p>
          <p>Opened: {order.Opened}</p>
          <p>Order Type: {order.OrderType}</p>
          <p>Limit: {order.Limit}</p>
          <p>Quantity: {order.Quantity}</p>
          <p>Quantity Remaining: {order.QuantityRemaining}</p>
        </div>
      )
    })
    return <div>{orderDetails}</div>
  }

  render() {
    return (
      <div>
        <h5>Open Orders</h5>
        {this.showOpenOrders()}
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
