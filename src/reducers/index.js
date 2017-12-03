import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import counter from "./counter"
import tradehistory from "./tradehistory"
import accountSummary from "./accountSummary"

export default combineReducers({
  routing: routerReducer,
  counter,
  tradehistory,
  accountSummary
})
