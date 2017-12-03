import React from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import {
  getBalance
} from "../reducers/accountSummary"

const AccountSummary = (props) => (
  <div>
    <h5>Account Summary</h5>
    {/* test getting balance on click, +1 to balance now, change it to get API after */}
    <button onClick={props.getBalance}> Get Balance </button>
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
