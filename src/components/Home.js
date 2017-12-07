import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import AccountSummary from "./AccountSummary"
import Chart from "./Chart"
import Orders from "./Orders"
import News from "./News"
import AltData from "./AltData"
import AddTradingStrategy from "./AddTradingStrategy"
import ShowTradingStrategies from "./ShowTradingStrategies"

import "./Home.css"

const Home = props => (
  <div className="container">
    <div className="row">
      <div className="col s2">
        <div id="left-account-summary">
          <Route exact path="/" component={AccountSummary} />
        </div>
      </div>
      <div className="col s8">
        <div id="top-chart">{<Chart />}</div>
        <div id="middle-orders">
          <Route exact path="/" component={Orders} />
        </div>
      </div>
      <div className="col s2">
        <div id="top-right-news">
          <Route exact path="/" component={News} />
        </div>
      </div>

      {/* <div className="bottom-right-alt-data">
        <Route exact path="/" component={AltData} />
      </div> */}
    </div>
    <div className="row">
      <div className="col s12">
        <div className="bottom-trading-strategy">
          <Route exact path="/" component={AddTradingStrategy} />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col s12">
        <div className="bottom-show-trading-strategy">
          <Route exact path="/" component={ShowTradingStrategies} />
        </div>
      </div>
    </div>
  </div>
)

export default connect()(Home)
