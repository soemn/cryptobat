var mongoose = require("mongoose")
var Schema = mongoose.Schema

var balanceSchema = new Schema(
  {
    Currency: String, // BTC, ETH, OMG
    Balance: Number,
    Available: Number,
    Pending: Number
  },
  {
    timestamps: true
  }
)

balanceSchema.methods.trade = function() {
  console.log(`This currency is ${this.Currency}`)
}

const Balance = mongoose.model("Balance", balanceSchema)
module.exports = Balance
