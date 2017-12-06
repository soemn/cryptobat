import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import { getOpenOrders } from "../reducers/openOrders"

class Orders extends Component {
  componentWillMount() {
    this.props.getOpenOrders()
    // console.log("getOpenOrders called")
  }

  render() {
    return (
      <div>
        <h5>Open Orders</h5>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currency1: state.navBar.currency1,
  currency2: state.navBar.currency2,
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
