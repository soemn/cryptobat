import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import AccountSummary from './AccountSummary'
import Chart from './Chart'
import Orders from './Orders'
import News from './News'
import AltData from './AltData'
import TradingStrategy from './TradingStrategy'

import './Home.css'

const Home = props => (
  <div className="container">
    <div className="fixedStuff">
      <div className="left-account-summary">
        <Route exact path="/" component={AccountSummary} />
      </div>
      <div className="top-chart">
        <Chart />
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

export default connect()(Home)
