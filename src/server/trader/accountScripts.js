const bittrex = require("node-bittrex-api")

bittrex.options({
  apikey: process.env.BITTREX_KEY,
  apisecret: process.env.BITTREX_SECRET
})

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
          let pendingBuyOrders = 0
          if (data.result.length > 0) {
            let allOrders = data.result
            allOrders.forEach(order => {
              if (order.OrderType === "LIMIT_BUY") {
                pendingBuyOrders += order.QuantityRemaining
              }
            })
          }
          resolve(pendingBuyOrders)
        }
      },
      true
    )
  })
}

const getAllPendingSellOrders = tokenPair => {
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
          let pendingSellOrders = 0
          if (data.result.length > 0) {
            let allOrders = data.result
            allOrders.forEach(order => {
              if (order.OrderType === "LIMIT_SELL") {
                pendingSellOrders += order.QuantityRemaining
              }
            })
          }
          resolve(pendingSellOrders)
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

module.exports = {
  getAllPendingBuyOrders,
  getAllPendingSellOrders,
  getBalance
}
