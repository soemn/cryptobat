import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"

class Chart extends Component {
  componentDidMount() {
    let width = document.getElementById("top-chart").offsetWidth
    let height = document.getElementById("top-chart").offsetHeight

    const tradingWidget = document.createElement("script")
    tradingWidget.innerHTML = `new TradingView.widget({
      width: ${width},
      height: ${height},
      id: 'testing',
      symbol: 'BITTREX:ETHBTC',
      interval: 'D',
      timezone: 'Asia/Singapore',
      theme: 'Dark',
      style: '1',
      locale: 'en',
      toolbar_bg: 'rgba(1,20,35,1)',
      enable_publishing: false,
      allow_symbol_change: true,
      hideideas: true
    })`
    document.body.appendChild(tradingWidget)
    let iframeDiv = document.querySelector('div[id^="tradingview_"]')
    let chartDiv = document.getElementById("chart")
    chartDiv.appendChild(iframeDiv)
  }

  render() {
    return <div id="chart" />
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    changePage: () => push("/Chart")
  })
export default connect(mapDispatchToProps)(Chart)
