import React from "react"
import { connect } from "react-redux"

const TradeHistory = props => (
  <div className="container">
    <p>Count: {props.test2}</p>
    <p>Count: {props.test.objectItem}</p>
    <div className="fixedStuff">
      <div className="navigation-bar">
        <p>CRYPTOBAT</p>
      </div>

      <div className="left-account-summary">
        <p>Account Summary</p>
        {/* render API res for GET https://bittrex.com/api/v1.1/account/getbalances?apikey=API_KEY */}
      </div>
      <div className="top-chart">
        <p>Chart</p>
        {/* render API res from chart */}
      </div>
      <div className="middle-orders">
        <p>Open Orders/Place Orders</p>
        {/* render API res for GET https://bittrex.com/api/v1.1/account/getbalances?apikey=API_KEY
              */}
      </div>
      <div className="top-right-news">
        <p>News</p>
      </div>
      <div className="bottom-right-alt-data">
        <p>Alt Data</p>
      </div>
    </div>

    <div className="bottom-trading-strategy">
      <p>Trading Strategy #1</p>
    </div>
  </div>
)

const mapStateToProps = state => ({
  test: state.tradehistory.test,
  test2: state.counter.count
})

export default connect(mapStateToProps)(TradeHistory)
