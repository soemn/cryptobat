import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import counter from "./counter"
import tradehistory from "./tradehistory"
import news from "./news"
import accountSummary from "./accountSummary"
import navBar from "./navBar"
import openOrders from "./openOrders"
import addtradingStrategy from "./addtradingStrategy"
import showTradingStrategies from "./showTradingStrategies"

export default combineReducers({
  routing: routerReducer,
  counter,
  tradehistory,
  accountSummary,
  news,
  navBar,
  openOrders,
  addtradingStrategy,
  showTradingStrategies
})
