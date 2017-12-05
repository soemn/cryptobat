const Strategy = require("../models/strategy")
const bittrex = require("node-bittrex-api")
const {
  getAllPendingBuyOrders,
  getAllPendingSellOrders,
  getBalance,
  getMarketPrice
} = require("./accountScripts")

bittrex.options({
  apikey: process.env.BITTREX_KEY,
  apisecret: process.env.BITTREX_SECRET
})

const trader = () => {
  console.log("============== trading now ==============")

  Strategy.find({}, (err, res) => {
    res.forEach(strategy => {
      // console.log(strategy)
      if (strategy.Active === true) {
        checkConditions(strategy.conditions, strategy.MarketName)
      }
    })
  })

  //check current balance

  // get data from bittrex
  // compare with all conditions in database
  // check balance
  // if conditions meet data-response, then execute trade
}

const checkConditions = (conditions, tokenPair) => {
  console.log("checking conditions")
  let conditionsAllMet = false
  conditions.forEach(condition => {
    if (condition.Type === "resistanceLine") {
      getMarketPrice(tokenPair).then(currentBidPrice => {
        console.log(
          "Placing a sell order for " + tokenPair + " above " + currentBidPrice
        )
      })
    } else if (condition.Type === "supportLine") {
      getMarketPrice(tokenPair).then(currentBidPrice => {
        console.log(
          "Placing a buy order for " + tokenPair + " below " + currentBidPrice
        )
      })
    }
  })
}

module.exports = trader
module.exports = trader
