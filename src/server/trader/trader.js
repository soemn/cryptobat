const Strategy = require("../models/strategy")
const bittrex = require("node-bittrex-api")

bittrex.options({
  apikey: process.env.BITTREX_KEY,
  apisecret: process.env.BITTREX_SECRET
})

const trader = () => {
  console.log("============== trading now ==============")

  // getBalance("OMG").then(result => {
  //   console.log(result)
  // })

  getAllPendingBuyOrders("BTC-OMG").then(result => {
    console.log(result)
  })

  //check current balance

  // get data from bittrex
  // compare with all conditions in database
  // check balance
  // if conditions meet data-responce, then execute trade
}

const getAllPendingBuyOrders = tokenPair => {
  let customRequestPath =
    "https://bittrex.com/api/v1.1/market/getopenorders?apikey=API_KEY&market=" +
    tokenPair

  return new Promise((resolve, reject) => {
    bittrex.sendCustomRequest(
      customRequestPath,
      function(data, err) {
        if (err) {
          reject(err)
        } else {
          if (data.result.length > 0) {
            let allOrders = data.result
            console.log(allOrders)
          }
          resolve(data)
        }
      },
      true
    )
  })
}

const getBalance = token => {
  return new Promise((resolve, reject) => {
    bittrex.getbalance({ currency: token }, function(data, err) {
      if (err) {
        reject(err)
      } else {
        let balance = data.result.Available
        resolve(balance)
      }
    })
  })
}

module.exports = trader
