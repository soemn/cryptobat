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
        <p>Currency: {this.props.currency}</p>
        <p>Balance: {this.props.balance}</p>
        <p>Available: {this.props.available}</p>
        <p>Pending: {this.props.pending}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currency: state.accountSummary.currency,
  balance: state.accountSummary.balance,
  available: state.accountSummary.available,
  pending: state.accountSummary.pending
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
