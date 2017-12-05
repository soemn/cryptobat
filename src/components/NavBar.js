import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import { chooseCurrPair } from "../reducers/navBar"

const NavBar = props => (
  <div>
    <header className="navigation-bar">
      <h4>CRYPTOBAT</h4>
      Currency Pair:
      {/* <select> that updates navBar currency state onChange */}
      <select id="selectBox" onChange={props.chooseCurrPair}>
        <option value="ETH-OMG">
          {props.currency1}-{props.currency2}
        </option>
        <option value="BTC-ETH">BTC-ETH</option>
        <option value="BTC-OMG">BTC-OMG</option>
      </select>
      <Link to="/">Trade View</Link> |
      <Link to="/tradehistory"> Trade History</Link>
    </header>
  </div>
)

const mapStateToProps = state => ({
  currency1: state.navBar.currency1,
  currency2: state.navBar.currency2
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      chooseCurrPair,
      changePage: () => push("/NavBar")
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
