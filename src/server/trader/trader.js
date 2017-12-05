const Strategy = require("../models/strategy")
const bittrex = require("node-bittrex-api")
const {
  getAllPendingBuyOrders,
  getAllPendingSellOrders,
  getBalance
} = require("./accountScripts")

bittrex.options({
  apikey: process.env.BITTREX_KEY,
  apisecret: process.env.BITTREX_SECRET
})

const trader = () => {
  console.log("============== trading now ==============")

  Strategy.find({}, (err, res) => {
    res.forEach(strategy => {
      console.log(strategy)
    })
  })

  // getBalance("OMG")
  //   .then(result => {
  //     console.log("You have :" + result + " OMG")
  //   })
  //   .then(
  //     getBalance("BTC").then(result => {
  //       console.log("You have :" + result + " BTC")
  //     })
  //   )
  //   .then(
  //     getAllPendingBuyOrders("BTC-OMG").then(result => {
  //       console.log("pending buy orders for BTC-OMG:", result)
  //     })
  //   )
  //   .then(
  //     getAllPendingSellOrders("BTC-OMG").then(result => {
  //       console.log("pending sell orders for BTC-OMG:", result)
  //     })
  //   )

  //check current balance

  // get data from bittrex
  // compare with all conditions in database
  // check balance
  // if conditions meet data-response, then execute trade
}

module.exports = trader
