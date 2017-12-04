const Strategy = require("../models/strategy")

const trader = () => {
  console.log("trading now")

  Strategy.find({}, (err, allStrats) => {
    allStrats.map(strat => {
      strat.trade()
    })
  })
}

module.exports = trader
