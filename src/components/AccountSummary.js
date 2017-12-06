import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { getBalance } from '../reducers/accountSummary'

class AccountSummary extends Component {
  componentWillMount() {
    this.props.getBalance()
  }

  // method to display filtered currency balances
  // argument from navBar currency state
  showCurrency(ticker) {
    let allBalances = this.props.allBalances
    const currencyPair1 = this.props.currency1
    for (var i = 0; i < allBalances.length; i++) {
      if (allBalances[i].Currency == ticker) {
        return (
          <div>
            <p>Currency:{allBalances[i].Currency}</p>
            <p>Balance: {allBalances[i].Balance}</p>
            <p>Available: {allBalances[i].Available}</p>
            <p>Pending: {allBalances[i].Pending}</p>
          </div>
        )
      }
    }
  }

  render() {
    return (
      <div>
        <h5>Account Summary</h5>
        {this.showCurrency(this.props.currency1)}
        {this.showCurrency(this.props.currency2)}
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
      getBalance,
      changePage: () => push('/AccountSummary')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary)
