import React from "react"
import { connect } from "react-redux"

const AccountSummary = (props) => (
  <div>
    <h5>Account Summary</h5>
    <p>Balance: {props.balance}</p>
    <p>Available: {props.available}</p>
    <p>Pending: {props.pending}</p>
  </div>
)

const mapStateToProps = state => ({
  balance: state.accountSummary.balance,
  available: state.accountSummary.available,
  pending: state.accountSummary.pending
})


export default connect(mapStateToProps)(AccountSummary)
// export default AccountSummary
