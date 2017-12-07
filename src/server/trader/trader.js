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
      if (strategy.Active === true) {
        checkConditions(strategy.conditions, strategy.MarketName).then(
          result => {
            if (result === true) {
              runExecutions(strategy.executions, strategy.MarketName)
            }
          }
        )
      }
    })
  })
}

const checkEachCondition = (condition, tokenPair) => {
  if (condition.Type === "resistanceLine") {
    return new Promise((resolve, reject) => {
      // getMarketPrice(tokenPair).then(currentBidPrice => {
      //   if (currentBidPrice < condition.Value) {
      //     console.log("condition met for resistanceLine")
      //     resolve(true)
      //   } else resolve(false)
      // })
      resolve(true)
    })
  } else if (condition.Type === "supportLine") {
    return new Promise((resolve, reject) => {
      // getMarketPrice(tokenPair).then(currentBidPrice => {
      //   if (currentBidPrice > condition.Value) {
      //     console.log("condition met for supportLine")
      //     resolve(true)
      //   } else resolve(false)
      // })
      resolve(true)
    })
  }
}

const checkConditions = (conditions, tokenPair) => {
  return new Promise((resolve, reject) => {
    console.log("checking conditions")
    let conditionPromises = []

    conditions.forEach(condition => {
      conditionPromises.push(checkEachCondition(condition, tokenPair))
    })

    Promise.all(conditionPromises).then(response => {
      if (response.indexOf(false) === -1) {
        resolve(true)
      } else resolve(false)
    })
  })
}

const runEachExecution = (execution, tokenPair) => {
  if (process.env.EXECUTION_ENV === "production") {
    let currency1 = tokenPair.substring(0, 3)
    let currency2 = tokenPair.substring(4, 7)

    if (execution.TradeType === "tradebuy") {
      return new Promise((resolve, reject) => {
        getBalance(currency2).then(balance => {
          console.log("balance of " + currency2 + " is " + balance)

          getAllPendingBuyOrders(tokenPair).then(allPendingBuyOrders => {
            console.log(
              "You have " +
                allPendingBuyOrders +
                " pending buy orders of " +
                tokenPair
            )
            if (balance + allPendingBuyOrders < execution.Quantity) {
              let quantityToBuy =
                execution.Quantity - balance - allPendingBuyOrders

              // check if you have enough money to buy
              getBalance(currency1).then(yourCurrency => {
                if (yourCurrency > quantityToBuy * execution.Rate) {
                  console.log(
                    "You have enough " +
                      currency1 +
                      ", buying more " +
                      currency2
                  )

                  // !!! executing trade !!!
                  bittrex.tradebuy(
                    {
                      MarketName: tokenPair,
                      OrderType: execution.OrderType,
                      Quantity: quantityToBuy,
                      Rate: execution.Rate,
                      TimeInEffect: execution.TimeInEffect,
                      ConditionType: execution.ConditionType,
                      Target: execution.Target
                    },
                    function(data, err) {
                      if (err) {
                        console.error(err)
                      } else console.log(data)
                    }
                  )
                }
              })

              resolve(true)
            } else console.log("Buying: You already have enough " + currency2)
          })
        })
        resolve(true)
      })
    } else if (execution.TradeType === "tradesell") {
      return new Promise((resolve, reject) => {
        getBalance(currency2).then(balance => {
          console.log("balance of " + currency2 + " is " + balance)
          if (balance > execution.Quantity) {
            console.log("selling " + currency2)

            let quantityToSell = balance - execution.Quantity

            // !!! executing trade !!!
            bittrex.tradesell(
              {
                MarketName: tokenPair,
                OrderType: execution.OrderType,
                Quantity: quantityToSell,
                Rate: execution.Rate,
                TimeInEffect: execution.TimeInEffect,
                ConditionType: execution.ConditionType,
                Target: execution.Target
              },
              function(data, err) {
                if (err) {
                  console.error(err)
                } else console.log(data)
              }
            )

            resolve(true)
          } else console.log("Selling: You do not have enough " + currency2)
        })
        resolve(true)
      })
    }
  } else console.log("Execution env not production. For display only.")
}

const runExecutions = (executions, tokenPair) => {
  return new Promise((resolve, reject) => {
    console.log("runnning executions")
    let executionPromises = []

    executions.forEach(execution => {
      executionPromises.push(runEachExecution(execution, tokenPair))
    })

    Promise.all(executionPromises).then(response => {
      if (response.indexOf(false) === -1) {
        resolve(true)
      } else resolve(false)
    })
  })
}

module.exports = trader
