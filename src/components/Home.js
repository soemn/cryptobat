import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import AccountSummary from "./AccountSummary"
import Chart from "./Chart"
import Orders from "./Orders"
import News from "./News"
import AltData from "./AltData"
import TradingStrategy from "./TradingStrategy"


const Home = props => (
  <div className="container">
    <div className="fixedStuff">
      <div className="left-account-summary">
        <Route exact path="/" component={AccountSummary} />
        {/* Soemin's example */}
        <p>Count: {props.test2}</p>
        <p>Count: {props.test.objectItem}</p>
      </div>
      <div className="top-chart">
        <Route exact path="/" component={Chart} />
      </div>
      <div className="middle-orders">
        <Route exact path="/" component={Orders} />
      </div>
      <div className="top-right-news">
        <Route exact path="/" component={News} />
      </div>
      <div className="bottom-right-alt-data">
        <Route exact path="/" component={AltData} />
      </div>
    </div>
    <div className="bottom-trading-strategy">
      <Route exact path="/" component={TradingStrategy} />
    </div>
  </div>
)

const mapStateToProps = state => ({
  test: state.tradehistory.test,
  test2: state.counter.count
})

export default connect(mapStateToProps)(Home)
