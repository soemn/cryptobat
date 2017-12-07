import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import { chooseCurrPair } from "../reducers/navBar"

const NavBar = props => (
  <nav className="nav-extended">
    <div className="container">
      <div className="nav-wrapper">
        <div className="logo">
          <h2>CRYPTOBAT</h2>
        </div>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab">
            Currency Pair:
            {/* <select> that updates navBar currency state onChange */}
            <select id="selectBox" onChange={props.chooseCurrPair}>
              <option value="ETH-OMG">
                {props.currency1}-{props.currency2}
              </option>
              <option value="BTC-ETH">BTC-ETH</option>
              <option value="BTC-OMG">BTC-OMG</option>
            </select>
          </li>
          <li className="tab">
            <Link to="/">Trade View</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
