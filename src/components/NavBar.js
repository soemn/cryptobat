import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => (
  <div>
    <header className="navigation-bar">
      <h4>CRYPTOBAT</h4>
      Currency Pair:{" "}
      <select>
        <option value="">ETH/OMG</option>
        <option value="">BTC/ETH</option>
        <option value="">BTC/OMG</option>
      </select>
      <Link to="/">Trade View</Link> |
      <Link to="/tradehistory"> Trade History</Link>
    </header>
  </div>
)

export default NavBar
