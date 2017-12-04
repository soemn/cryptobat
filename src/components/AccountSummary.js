import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import { getBalance } from "../reducers/accountSummary"

class AccountSummary extends Component {
  componentWillMount() {
    this.props.getBalance()
  }

  render() {
    return (
      <div>
        <h5>Account Summary</h5>
        <p>Currency: {this.props.currency1}</p>
        <p>Balance: {this.props.balance1}</p>
        <p>Available: {this.props.available1}</p>
        <p>Pending: {this.props.pending1}</p>
        <p>Currency: {this.props.currency2}</p>
        <p>Balance: {this.props.balance2}</p>
        <p>Available: {this.props.available2}</p>
        <p>Pending: {this.props.pending2}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currency1: state.accountSummary.currency1,
  balance1: state.accountSummary.balance1,
  available1: state.accountSummary.available1,
  pending1: state.accountSummary.pending1,
  currency2: state.accountSummary.currency2,
  balance2: state.accountSummary.balance2,
  available2: state.accountSummary.available2,
  pending2: state.accountSummary.pending2
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBalance,
      changePage: () => push("/AccountSummary")
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary)
// export default AccountSummary
