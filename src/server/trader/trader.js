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

const checkEachCondition = (condition, tokenPair) => {
  if (condition.Type === "resistanceLine") {
    return new Promise((resolve, reject) => {
      getMarketPrice(tokenPair).then(currentBidPrice => {
        if (currentBidPrice < condition.Value) {
          console.log("condition met for resistanceLine")
          resolve(true)
        } else resolve(false)
      })
    })
  } else if (condition.Type === "supportLine") {
    return new Promise((resolve, reject) => {
      getMarketPrice(tokenPair).then(currentBidPrice => {
        if (currentBidPrice > condition.Value) {
          console.log("condition met for supportLine")
          resolve(true)
        } else resolve(false)
      })
    })
  }
}

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

  let conditionPromises = []

  conditions.forEach(condition => {
    conditionPromises.push(checkEachCondition(condition, tokenPair))
  })

  Promise.all(conditionPromises).then(response => {
    console.log(response)
  })
}

module.exports = trader
